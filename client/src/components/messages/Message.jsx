import { useState, useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";
import useEditMessage from "../../hooks/useEditMessage";
import useDeleteMessage from "../../hooks/useDeleteMessage";

const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const { editMessage } = useEditMessage();
    const { deleteMessage } = useDeleteMessage();

    const [isEditing, setIsEditing] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
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

    const handleDelete = async () => {
        try {
            await deleteMessage(message._id);
        } catch (error) {
            console.error("Failed to delete message", error);
        }
    };

    const showDeleteConfirmation = () => {
        setIsDeleting(true);
    };

    const cancelDelete = () => {
        setIsDeleting(false);
    };

    return (
        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img
                        alt="Profile"
                        src={profilePic}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
            <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} max-w-xs md:max-w-md lg:max-w-lg break-words rounded-lg p-2`}>
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
                    {isEditing ? (
                        <>
                            <button onClick={handleEdit} className="btn btn-primary btn-xs">Save</button>
                            <button onClick={handleCancelEdit} className="btn btn-secondary btn-xs">Cancel</button>
                        </>
                    ) : (
                        fromMe && (
                            <>
                                {isDeleting ? (
                                    <>
                                        <span>Are you sure?</span>
                                        <button onClick={handleDelete} className="btn btn-danger btn-xs">Yes</button>
                                        <button onClick={cancelDelete} className="btn btn-secondary btn-xs">No</button>
                                    </>
                                ) : (
                                    <>
                                        <button onClick={() => setIsEditing(true)} className="btn btn-secondary btn-xs">Edit</button>
                                        <button onClick={showDeleteConfirmation} className="btn btn-danger btn-xs">Delete</button>
                                    </>
                                )}
                            </>
                        )
                    )}
                </div>
                <div>{formattedTime}{formattedUpdatedTime}</div>
            </div>
        </div>
    );
};

export default Message;