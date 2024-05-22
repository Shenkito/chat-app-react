import Conversation from '../models/conversationModel.js';
import Message from '../models/messageModel.js';

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

        // SOCKET IO WILL GO HERE

        await conversation.save();
        await newMessage.save();

        // could be optimized as await Promise.all([convesrastion.save(), newMessage.save()]);

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