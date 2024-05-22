import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {

    return (

        <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden shadow-xl bg-cyan-50 bg-clip-padding">

            <Sidebar />
            <MessageContainer />

        </div>

    );
};

export default Home;