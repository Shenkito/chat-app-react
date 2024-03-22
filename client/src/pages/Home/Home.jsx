import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import SignupLoginSection from '../../components/SignupLoginSection/SignupLoginSection';

import '../Home/Home.css';

export default function Home() {
    return (
        <div className="home-container">
            <WelcomeSection />
            <SignupLoginSection />
        </div>
    )
}