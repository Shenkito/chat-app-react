import { Route, Routes } from 'react-router-dom';

import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';

function App() {

    return (
        <div className='p-4 h-screen flex items-center justify-center'>
            <Login />
            <SignUp />
        </div>
    )
}

export default App