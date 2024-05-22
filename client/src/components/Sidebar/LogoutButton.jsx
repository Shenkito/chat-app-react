import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {

    const { loading, logout } = useLogout();

    return (

        <div className="mt-auto">
            {!loading ? (
                <BiLogOut className="w-6 h-6 border-slate-500 cursor-pointer hover:text-blue-600" onClick={logout} />
            ) : (
                <span className="loading loading-spinner"></span>
            )}
        </div>

    );
};

export default LogoutButton;