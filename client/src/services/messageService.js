const baseUrl = 'http://localhost:3001';

export const send = async (messageData) => {
    const response = await fetch(`${baseUrl}/messages`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(messageData),
    });
    console.log(response);
    if (!response.ok) {
        throw new Error('Failed to send message');
    }

    const result = await response.json();
    return result;
}