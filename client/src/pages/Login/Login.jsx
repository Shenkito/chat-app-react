const Login = () => {
    return <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-xl shadow-xl bg-cyan-50 bg-clip-padding">
            <h1 className="text-3xl font-semibold text-center text-black">
                Login to
                <span className="text-blue-500"> Whisper </span>
            </h1>

            <form>
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text text-black">Username</span>
                    </label>
                    <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10" />
                </div>
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text text-black">Password</span>
                    </label>
                    <input type="text" placeholder="Enter password" className="w-full input input-bordered h-10" />
                </div>
            </form>
        </div>
    </div>
}

export default Login