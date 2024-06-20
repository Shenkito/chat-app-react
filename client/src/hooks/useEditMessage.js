import { useState } from 'react';

import useConversation from '../zustand/useConversation';
import toast from "react-hot-toast";

const useEditMessage = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { updateMessage } = useConversation();

    const editMessage = async (id, newMessage) => {

        const success = handleInputErrors(newMessage);
        if(!success) return;
        
        setLoading(true);
        setError(null);

        try {

            const response = await fetch(`/api/messages/edit/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: newMessage }),
            });

            if (!response.ok) {
                throw new Error("Failed to edit message");
            }

            const data = await response.json();

            if (data.error) {

                throw new Error(data.error);

            };

            updateMessage(data);
            setLoading(false);

            return data;
            
        } catch (error) {

            toast.error(error.message);
            setError(error.message || "Error editing messasge");
            throw error;

        } finally {

            setLoading(false);

        }
    };

    return { editMessage, loading, error }
};

export default useEditMessage;

function handleInputErrors(newMessage) {

    if (!newMessage) {

        toast.error('Please fill in the field');
        return false;

    };

    return true;
};