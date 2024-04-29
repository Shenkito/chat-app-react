import { Route, Routes } from 'react-router-dom';

import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Home from './pages/Home/Home';

function App() {

    return (
        <div className='p-4 h-screen flex items-center justify-center'>
            {/* <Login />
            <SignUp /> */}
            <Home />
        </div>
    )
}

export default App