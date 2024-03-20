import { Route, Routes } from 'react-router-dom';

import "../src/App.css"

// import MessageForm from './components/MessageForm/MessageForm';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';

function App() {

    return (
        <div className="main-app">
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    )
}

export default App