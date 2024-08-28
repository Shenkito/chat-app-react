import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';

import Home from '../src/pages/Home/Home';
import Login from '../src/pages/Login/Login';
import SignUp from '../src/pages/SignUp/SignUp';

function App() {

    const { authUser } = useAuthContext();

    return (

        <div className='p-4 h-screen flex items-center justify-center'>
            <Routes>
                <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
                <Route path='/login' element={authUser ? <Navigate to="/" /> : <Login />} />
                <Route path='/signup' element={authUser ? <Navigate to="/" /> : <SignUp />} />
            </Routes>
            <Toaster />
        </div>

    );
};

export default App;