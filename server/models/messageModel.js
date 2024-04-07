import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    senderId: { // The sender id is the id of the User model (collection)
        type: mongoose.Schema.Types.ObjectId, // Refference (id inside in the user model.)
        ref: "User", // the User model
        required: true
    },
    recieverId: { // -//-
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message: {
        type: String,
        required: true
    }
    // we get createdAt, updatedAt => we can access in front-end message.createdAt : will show date of creation
}, { timestamps: true });

const Message = mongoose.model("Message", messageSchema);

export default Message;