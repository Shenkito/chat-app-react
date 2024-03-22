import '../WelcomeSection/WelcomeSection.css'

export default function WelcomeSection() {
    return (
        <section className="welcome-section">
            <h1>Welcome to Whisper</h1>
            <p>A secure and intuitive messaging platform designed for seamless communication.</p>
            <div className="feature-highlights">
                <div className="feature">
                    <i className="fas fa-message"></i>
                    <h2>Real-time Messaging</h2>
                    <p>Exchange messages instantly with friends and family.</p>
                </div>
                <div className="feature">
                    <i className="fas fa-users"></i>
                    <h2>Group Chats</h2>
                    <p>Create groups and chat with multiple friends at once.</p>
                </div>
            </div>
        </section>
    )
}