import { Link } from 'react-router-dom';

import '../NavBar/NavBar.css'

export default function NavBar() {
    return (

        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link to="/home" className="nav-link">
                    <i className="fas fa-home"></i>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/user" className="nav-link">
                    <i className="fas fa-user"></i>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/messages" className="nav-link">
                    <i className="fa-solid fa-message"></i>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/send" className="nav-link">
                    <i className="fa-solid fa-paper-plane"></i>
                </Link>
            </li>
        </ul>

    )
}