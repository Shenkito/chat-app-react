import { useState } from 'react';
import { Link } from 'react-router-dom';

import './SignUp.css';

const SignUpFormKeys = {
    Username: 'username',
    Email: 'email',
    Password: 'password',
    ConfirmPassword: 'confirmPassword'
}

export default function SignUp() {
    const [values, setValues] = useState({
        [SignUpFormKeys.Username]: '',
        [SignUpFormKeys.Email]: '',
        [SignUpFormKeys.Password]: '',
        [SignUpFormKeys.ConfirmPassword]: '',
    });

    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    return (
        <div className="signup-form-container">
            <h2 className="signup-form-title">Sign Up</h2>
            <form className="signup-form">
                <input
                    type="text"
                    className="signup-form-input"
                    name={SignUpFormKeys.Username}
                    placeholder="Username"
                    onChange={inputChangeHandler}
                    value={values[SignUpFormKeys.Username]}
                />
                <input
                    type="email"
                    className="signup-form-input"
                    name={SignUpFormKeys.Email}
                    placeholder="Email"
                    onChange={inputChangeHandler}
                    value={values[SignUpFormKeys.Email]}
                />
                <input
                    type="password"
                    className="signup-form-input"
                    name={SignUpFormKeys.Password}
                    placeholder="Password"
                    onChange={inputChangeHandler}
                    value={values[SignUpFormKeys.Password]}
                />
                <input
                    type="password"
                    className="signup-form-input"
                    name={SignUpFormKeys.ConfirmPassword}
                    placeholder="Confirm Password"
                    onChange={inputChangeHandler}
                    value={values[SignUpFormKeys.ConfirmPassword]}
                />
                <button type="submit" className="signup-form-button">Sign Up</button>
                <p>
                    Already have an account? <Link to="/login" className="login-link">Login here</Link>
                </p>
            </form>
        </div>
    )
}
