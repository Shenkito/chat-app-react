import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Login.css'

const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
}

export default function Login() {

    const [values, setValues] = useState({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    });

    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    return (
        <div className="login-form-container">
            <h2 className="login-form-title">Login</h2>
            <form className="login-form">
                <input
                    type="text"
                    id="email"
                    className="login-form-input"
                    name={LoginFormKeys.Email}
                    placeholder="Email"
                    onChange={inputChangeHandler}
                    value={values[LoginFormKeys.Email]}
                />
                <input 
                    type="password"
                    id="password"
                    className="login-form-input"
                    name={LoginFormKeys.Password}
                    placeholder="Password"
                    onChange={inputChangeHandler}
                    value={values[LoginFormKeys.Password]}
                />
                <button type="submit" className="login-form-button">Login</button>
                <p>
                    If you are not registered, <Link to="/signup" className="register-link">click here</Link> to register.
                </p>
            </form>
        </div>
    )
}