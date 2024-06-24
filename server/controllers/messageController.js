import Conversation from '../models/conversationModel.js';
import Message from '../models/messageModel.js';
import { getRecieverSocketId, io } from '../socket/socket.js';

export const sendMessage = async (req, res) => {
    try {

        const { message } = req.body;
        const { id: recieverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, recieverId] } // $all / mongoose syntax
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, recieverId]
            });
        };

        const newMessage = new Message({
            senderId,
            recieverId,
            message,
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id)
        };

        // await conversation.save();
        // await newMessage.save();

        // optimized as await , will run in parallel
        await Promise.all([conversation.save(), newMessage.save()]);


        // SOCKET IO WILL GO HERE

        const recieverSocketId = getRecieverSocketId(recieverId);

        // io.to(<socket_id>).emit() used to send events to specific client
        if (recieverSocketId) {
            io.to(recieverSocketId).emit("newMessage", newMessage);
        };

        res.status(201).json(newMessage);

    } catch (error) {

        console.log("Error in sendMessage controller", error.message);
        res.status(500).json({ error: "Internal server error" });

    }
}

export const getMessages = async (req, res) => {
    try {

        const { id: userToChatWithId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatWithId] },
        }).populate("messages") // with mongoose we are able to see all the messages instead of only their ID (will return array of objects)

        if (!conversation) {
            return res.status(200).json([]);
        }

        const messages = conversation.messages;

        res.status(200).json(messages);

    } catch (error) {

        console.log("Error in getMessages controller", error.message);
        res.status(500).json({ error: "Internal server error" });

    };
};

export const editMessage = async (req, res) => {
    const { id } = req.params;
    const { message } = req.body;

    try {

        const updatedMessage = await Message.findByIdAndUpdate(id, { message }, { new: true });

        if (!updatedMessage) {
            return res.status(404).json({ message: "Message not found" });
        }

        res.json(updatedMessage);

    } catch (error) {

        console.log("Error in editMessage controller", error.message);
        res.status(500).json({ error: "Internal Server error" });

    }
};

export const deleteMessage = async (req, res) => {
    const { id } = req.params;

    try {
        
        const deletedMessage = await Message.findByIdAndDelete(id);

        if(!deletedMessage) {
            return res.status(404).json({ message: "Message not found "});
        }

        res.json({ message: "Message deleted successfully" });

    } catch (error) {
        
        console.log("Error in deleteMessage controller", error.message);
        res.status(500).json({ error: "Internal Server error" });
        
    }
};