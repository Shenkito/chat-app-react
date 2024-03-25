import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors';

import authRoutes from './routes/authRoutes.js'
import connectToMongoDB from './db/connectToMongoDB.js';

const app = express();
const PORT = process.env.PORT || 3001;

dotenv.config();

// Allow to get/extract the input fields data (JSON payloads) from the req.body
app.use(express.json());

app.use("/api/auth", authRoutes)

app.use(cors());

// app.get("/", (req, res) => {
//     // this is my root route http://localhost:3001/
//     res.send("Server is ready to use.")
// });

app.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server is running on port ${PORT}...`);
});