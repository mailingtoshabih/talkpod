import nopicture from "../assets/nopicture.png"
import logo from "../assets/default.jpg"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../app/authSlice";
import axios from 'axios'
const backend = import.meta.env.VITE_APP_BACKEND;





export const Navbar = () => {


    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);


    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.get(backend + "/auth/logout", { withCredentials: true });
            res && dispatch(setAuth());
          
        }
        catch (exc) {
            console.log(exc.message)
        }
    }




    return (

        <div className='relative z-10 mb-8'>

            {/* <div className='h-1 bg-gradient-to-r from-violet-500 via-cyan-500 to-violet-500 '></div> */}



            <nav className="fixed top-0 z-10 backdrop-blur-lg p-1 sm:px-10 mx-0 w-full">

                <div className={`flex justify-between max-w-7xl mx-auto`}>

                    <div className="font-bold text-lg sm:text-xl md:text-2xl my-auto">
                        <Link to={'/'} className="flex text-gray-900">
                            <span className="text-violet-700 text-3xl">📢</span>

                            <div className="my-auto">
                                <span className="text-gray-700">Talk</span>
                                <span className="text-violet-900">pod</span>
                            </div>
                        </Link>
                    </div>



                    {
                        user?.activated &&

                        <div className="flex justify-between my-auto border-2 border-gray-300 p-[0.1rem] sm:pr-2 rounded-lg space-x-3">
                            <img src={user?.pic} alt=""
                                className="rounded-md h-10 sm:h-12 sm:w-12 object-cover"/>

                            <p className="hidden sm:block font-semibold text-md sm:text-lg md:text-xl my-auto text-gray-600 cursor-pointer"
                                onClick={handleLogout}>
                                {user.name}
                            </p>

                            {/* <button className="bg-orange-500 font-semibold text-white px-3 p-1 rounded-lg"
                                >
                                Logout
                            </button> */}
                        </div>
                    }


                </div>
                
            </nav>

        </div>

    )
}
