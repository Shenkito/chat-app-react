const Conversation = () => {
    
    return <>

        <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
            <div className="avatar online">
                <div className="w-12 rounded-full">
                <img alt="Tailwind CSS chat bubble component" src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png" />
                </div>
            </div>
            <div className="flex flex-col flex-1">
                <div className="flex gap-3 justify-between">
                    <p className="font-bold text-gray-400">JohnDoe</p>
                    <span className="text-xl">emoji</span>
                </div>
            </div>
        </div>
        <div className="divider my-0 py-0 h-1" />

    </>

}

export default Conversation;


// const Conversation = () => {
    
//     return <>

//         <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
//             <div className="avatar online">
//                 <div className="w-12 rounded-full">
//                     <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt=" user avatar" />
//                 </div>
//             </div>
//             <div className="flex flex-col flex-1">
//                 <div className="flex gap-3 justify-between">
//                     <p className="font-bold text-gray-200">JohnDoe</p>
//                     <span className="text-xl">emoji</span>
//                 </div>
//             </div>
//         </div>
//         <div className="divider my-0 py-0 h-1" />

//     </>

// }

// export default Conversation;