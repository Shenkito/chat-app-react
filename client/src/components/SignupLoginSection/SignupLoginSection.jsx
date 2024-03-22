import '../SignupLoginSection/SignupLoginSection.css';

export default function SignupLoginSection() {
    return (
        <section className="signup-login-section">
            <h2>Get Started with Whisper</h2>
            <p>Join our community today and start connecting with friends!</p>
            <div className="cta-buttons">
                <a href="/signup" className="btn btn-primary">Sign Up</a>
                <a href="/login" className="btn btn-secondary">Log In</a>
            </div>
        </section>
    )
}