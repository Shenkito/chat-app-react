const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

const { Message } = require('./models/Message');

mongoose.connect(`mongodb://127.0.0.1:27017/chat-app-react`)
    .then(() => console.log('DB connected...'))
    .catch(err => console.log('DB error', err.message));
app.use(express.json());

app.post('/messages', async (req, res) => {
    try {
        const { text, sender } = req.body;
        const message = new Message({ text, sender });
        await message.save();
        res.status(201).json(message);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


app.listen(3001, () => {
    console.log('Server is running on port 3001...');
});