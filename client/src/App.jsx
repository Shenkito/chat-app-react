import { Route, Routes } from 'react-router-dom';

import "../src/App.css"

// import MessageForm from './components/MessageForm/MessageForm';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/Signup/Signup';

function App() {

    return (
        <div className="main-app">
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </div>
    )
}

export default App