import { Route, Routes } from 'react-router-dom';

import "../src/App.css"

// import MessageForm from './components/MessageForm/MessageForm';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

function App() {

    return (
        <div className="main-app">
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    )
}

export default App