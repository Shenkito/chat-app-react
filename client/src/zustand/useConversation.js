import { create } from 'zustand';


const useConversation = create((set) => ({

    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
    messages: [],
    setMessages: (messages) => set({ messages }),
    updateMessage: (updatedMessage) => set((state) => ({
        messages: state.messages.map((message) =>
            message._id === updatedMessage._id ? updatedMessage : message
        ),
    })),

}));

export default useConversation;