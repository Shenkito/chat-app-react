import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const fromMe = message.senderId === authUser._id;
    const chatClassName = fromMe ? "chat-end" : "chat-start";
    const profilePic = fromMe ? authUser.profilePicture : selectedConversation?.profilePicture;
    const bubbleBgColor = fromMe ? "bg-blue-500" : "";
    const formattedTime = extractTime(message.createdAt);
    const shakeClass = message.shouldShake ? "shake" : "";


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
            <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}`}>{message.message}</div>
            <div className="chat-footer text-xs flex gap-1 items-center text-blue-500">{formattedTime}</div>
        </div>

    );
};

export default Message;