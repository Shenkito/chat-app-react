import { Link } from 'react-router-dom';
import '../SignupLoginSection/SignupLoginSection.css';

export default function SignupLoginSection() {
    return (
        <section className="signup-login-section">
            <h2>Get Started with Whisper</h2>
            <p>Join our community today and start connecting with friends!</p>
            <div className="cta-buttons">
                <Link to="/login" className="btn btn-primary">Log In</Link>
                <Link to="/signup" className="btn btn-secondary">Sign Up</Link>
            </div>
        </section>
    )
}