import { useState } from 'react';

import * as messageService from '../services/messageService';

export default function MessageForm() {
    
    const [text, setText] = useState('');
    const [sender, setSender] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('clicked');
        const messageData = {
            text: text,
            sender: sender,
        }
        try {
            console.log({ text, sender });
            const message = await messageService.send(messageData);
            console.log(message);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Message"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <input
                type="text"
                placeholder="Sender"
                value={sender}
                onChange={(e) => setSender(e.target.value)}
            />
            <button type="submit">Send</button>
        </form>
    );
}