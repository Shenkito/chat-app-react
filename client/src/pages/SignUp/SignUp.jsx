import { Link } from 'react-router-dom';

import GenderCheckbox from "./GenderCheckbox"

const SignUp = () => {
    return (

        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-xl bg-cyan-50">

                <h1 className="text-3xl font-semibold text-center text-black">
                    Sign Up to
                    <span className="text-blue-500"> Whisper </span>
                </h1>

                <form>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-black">Full Name</span>
                        </label>
                        <input type="text" placeholder="Enter full name" className="w-full input input-bordered h-10" />
                    </div>

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
                        <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10" />
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-black">Confirm password</span>
                        </label>
                        <input type="password" placeholder="Confirm password" className="w-full input input-bordered h-10" />
                    </div>

                    <GenderCheckbox />

                    <div className="text-center">
                        <Link to="/login" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                            {" Already "} have an account ?
                        </Link>
                    </div>

                    <div>
                        <button className="btn btn-block btn-sm mt-2 hover:text-blue-600"> Sign Up </button>
                    </div>

                </form>
            </div>
        </div>
        
    )
}

export default SignUp;


// const SignUp = () => {
//     return (

//         <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//             <div className="w-full p-6 rounded-xl shadow-xl bg-cyan-50 bg-clip-padding">

//                 <h1 className="text-3xl font-semibold text-center text-black">
//                     Sign Up to
//                     <span className="text-blue-500"> Whisper </span>
//                 </h1>

//                 <form>
//                     <div>
//                         <label className="label p-2">
//                             <span className="text-base label-text text-black">Full Name</span>
//                         </label>
//                         <input type="text" placeholder="Enter full name" className="w-full input input-bordered h-10" />
//                     </div>

//                     <div>
//                         <label className="label p-2">
//                             <span className="text-base label-text text-black">Username</span>
//                         </label>
//                         <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10" />
//                     </div>

//                     <div>
//                         <label className="label p-2">
//                             <span className="text-base label-text text-black">Password</span>
//                         </label>
//                         <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10" />
//                     </div>

//                     <div>
//                         <label className="label p-2">
//                             <span className="text-base label-text text-black">Confirm password</span>
//                         </label>
//                         <input type="password" placeholder="Confirm password" className="w-full input input-bordered h-10" />
//                     </div>

//                     <GenderCheckbox />

//                     <div className="text-center">
//                         <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
//                             {" Already "} have an account ?
//                         </a>
//                     </div>

//                     <div>
//                         <button className="btn btn-block btn-sm mt-2 hover:text-blue-600"> Sign Up </button>
//                     </div>

//                 </form>
//             </div>
//         </div>
//     )
// }

// export default SignUp;