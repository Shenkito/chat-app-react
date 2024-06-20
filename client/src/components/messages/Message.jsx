import { useState, useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";
import useEditMessage from "../../hooks/useEditMessage";

const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const { editMessage } = useEditMessage();

    const [isEditing, setIsEditing] = useState(false);
    const [newMessage, setNewMessage] = useState(message.message);

    useEffect(() => {
        setNewMessage(message.message);
    }, [message.message]);

    const fromMe = message.senderId === authUser._id;
    const chatClassName = fromMe ? "chat-end" : "chat-start";
    const profilePic = fromMe ? authUser.profilePicture : selectedConversation?.profilePicture;
    const bubbleBgColor = fromMe ? "bg-blue-500" : "";
    const formattedTime = extractTime(message.createdAt);
    const formattedUpdatedTime = message.updatedAt && message.updatedAt !== message.createdAt
        ? ` (edited at ${extractTime(message.updatedAt)}) `
        : '';
    const shakeClass = message.shouldShake ? "shake" : "";

    const handleEdit = async () => {
        try {
            await editMessage(message._id, newMessage);
            setIsEditing(false);
        } catch (error) {
            console.error("Failed to edit message:", error);

        }
    };

    const handleCancelEdit = () => {
        setNewMessage(message.message); // Reset to original message
        setIsEditing(false);
    };

    return (

        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-r-full">
                    <img
                        alt="Tailwind CSS chat bubble component"
                        src={profilePic}
                    />
                </div>
            </div>
            <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}`}>
                {isEditing ? (
                    <div className="flex flex-col gap-2">
                        <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            className="input input-bordered w-full"
                        />
                    </div>
                ) : (
                    <div>
                        <p>{message.message}</p>
                    </div>
                )}
            </div>
            <div className="chat-footer text-xs flex flex-col items-end gap-1 text-blue-500 mt-1">
                <div className="flex gap-2">
                    {isEditing && (
                        <>
                            <button onClick={handleEdit} className="btn btn-primary btn-xs">Save</button>
                            <button onClick={handleCancelEdit} className="btn btn-secondary btn-xs">Cancel</button>
                        </>
                    )}
                    {!isEditing && fromMe && (
                        <button onClick={() => setIsEditing(true)} className="btn btn-secondary btn-xs">Edit</button>
                    )}
                </div>
                <div>{formattedTime}{formattedUpdatedTime}</div>
            </div>
        </div>

    );
};

export default Message;