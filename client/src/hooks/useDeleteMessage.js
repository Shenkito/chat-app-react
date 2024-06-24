import { useState } from "react";

import useConversation from "../zustand/useConversation";

const useDeleteMessage = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { deleteCurrentMessage } = useConversation();

    const deleteMessage = async (id) => {
        setLoading(true);
        setError(null);

        try {

            const response = await fetch(`/api/messages/delete/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {

                throw new Error("Failed to delete message");

            }

            await response.json();
            deleteCurrentMessage(id);
            setLoading(false);

        } catch (error) {

            setLoading(false);
            setError(error.message || "Error deleting message");
            throw error;

        } finally {

            setLoading(false);

        }
    };

    return { deleteMessage, loading, error };

};

export default useDeleteMessage;