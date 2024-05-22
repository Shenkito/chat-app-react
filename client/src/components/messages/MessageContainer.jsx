import MessageInput from "./MessageInput";
import Messages from "./Messages";

import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {

    const noChatSelected = true;

    return (

        <div className="md:min-w-[450px] flex flex-col">
            {noChatSelected ? (
                <NoChatSelected />
            ) : (
                <>
                    <div className="bg-sky-500 px-4 py-2 mb-2">
                        <span className="label-text text-white">To: </span>
                        <span className="text-cyan-50 font-bold">JohnDoe</span>
                    </div>

                    <Messages />
                    <MessageInput />
                </>
            )}
        </div>

    );
};

export default MessageContainer;

const NoChatSelected = () => {

    return (

        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-400 font-semibold flex flex-col items-center gap-2">
                <p>Welcome JohnDoe</p>
                <p>Select a chat to start messagin</p>
                <TiMessages className="text-3xl md:text-6xl text-center" />
            </div>
        </div>

    );
};


// import MessageInput from "./MessageInput"
// import Messages from "./Messages"

// const MessageContainer = () => {
//     return (

//         <div className="md:min-w-[450px] flex flex-col">
//             <>
//             <div className="bg-sky-500 px-4 py-2 mb-2">
//                 <span className="label-text text-white">To: </span>
//                 <span className="text-cyan-50 font-bold">JohnDoe</span>
//             </div>

//             <Messages />
//             <MessageInput />
//             </>
//         </div>

//     )
// }

// export default MessageContainer;