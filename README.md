# Whisper

Whisper is a real-time chat application built using the MERN stack (MongoDB/Mongoose, Express.js, React, Node.js), Socket.IO for real-time communication, TailwindCSS, Daisy UI for styling, Zustand for global state management, and React Hot Toast for error handling.

## Screenshots

### Login Page
![Login Page](https://i.ibb.co/Cbw3DMM/Whisper-Login-Page.png)

### Sign Up Page
![Sign Up Page](https://i.ibb.co/Mh5MwcG/Whisper-Sign-Up-Page.png)

### Home Page
![Home Page](https://i.ibb.co/tJSs4v0/Whisper-Home-Page.png)

### Conversation Page
![Conversation Page](https://i.ibb.co/JRfvJ3D/Whisper-Conversation-Page.png)

## Features

- **Authentication and Authorization**: Secure user login and signup using JWT.
- **Real-Time Messaging**: Instant messaging with Socket.IO.
- **Online User Status**: Real-time online status updates using Socket.IO and React Context.
- **Global State Management**: Efficient state management using Zustand.
- **Error Handling**: Client and server-side error handling with React Hot Toast.

## Tech Stack

- **Frontend**: React, TailwindCSS, Daisy UI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB/Mongoose
- **Real-Time Communication**: Socket.IO
- **State Management**: Zustand
- **Error Handling**: React Hot Toast

## Installation and Setup

1. **Clone the repository**
    ```bash
    https://github.com/Shenkito/chat-app-react
    ```

2. **Install dependencies for both frontend and backend**
    ```bash
    cd client
    npm install
    cd server
    npm install
    ```

3. **Set up environment variables**

    Create a `.env` file in the server directory.

    ```env
    PORT=3001
    MONGO_DB_URI=mongodb://127.0.0.1:27017/chat-app-react
    JWT_SECRET=l0rd0f7h3r1ng$
    NODE_ENV=development
    ```

5. **Run the application**

    In the client directory, start the React application:
    ```bash
    npm run dev
    ```

    In the server directory, start the backend server:
    ```bash
    npm run server
    ```

7. **Access the application**

    Open your browser and navigate to `http://localhost:3000` to see the application in action.
