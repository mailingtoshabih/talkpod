import { useState } from 'react'
import { Link } from 'react-router-dom'
import { onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"
import { useDispatch } from "react-redux";
import { setAuth } from "../../app/authSlice";
import axios from "axios"

const backend = import.meta.env.VITE_APP_BACKEND;






export const Email = () => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [pass, setPassword] = useState("");

    const [wrongPass, setWrongPass] = useState(null);
    const [spinner, setSpinner] = useState(false);







    const handleSubmit = async (e) => {
        e.preventDefault();
        setSpinner(true);

        if (email && pass) {

            try {
                const user = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    pass
                );

                if (!user) return;

                const { data } = await axios.post(`${backend}/auth/signup`, { email });
                data && dispatch(setAuth(data));
                data && setSpinner(false);
            }
            catch (exc) {
                setSpinner(false);
                setWrongPass(exc.message)
            }

            // onNext(e);
        }
        else {
            setSpinner(false);
        }

    }







    return (
        <>
            <div className='h-screen border bg-hero bg-no-repeat bg-cover bg-center bg-fixed'>


                <p className='mt-20 h-fit text-violet-950 font-extrabold text-7xl
                text-center'>
                    Talkpod
                </p>




                <div className='my-5 h-80 text-white  px-2 sm:px-20 py-5 mx-auto w-full sm:w-[32rem] text-center 
                bg-gradient-to-r from-violet-950 to-purple-900 sm:rounded-lg 
                hover:shadow-2xl hover:shadow-violet-600 duration-1000'>

                    <p className='font-semibold text-xl sm:text-2xl'>Signup For Talkpod</p>


                    <div className='mt-5'>


                        <input
                            className='my-5 h-12 block w-full p-2 text-center rounded-md outline-none text-gray-600 font-semibold placeholder:text-gray-400'
                            placeholder='example@gmail.com'
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />


                        <input
                            className='my-5 block h-12 w-full mx-auto p-2 text-center rounded-md outline-none text-gray-600 font-semibold'
                            type="password"
                            placeholder='******'
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button className='bg-white px-4 py-2 text-violet-900 text-sm font-bold rounded-full'
                            onClick={handleSubmit}>
                            
                            {!spinner ? "Signup" :
                                (
                                    <div className='text-center'>
                                        <svg aria-hidden="true" className="inline w-4 h-4 text-white animate-spin fill-violet-900" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                        </svg>
                                    </div>
                                )
                            }

                        </button>




                        <div className='my-2 text-xs sm:text-md'>
                            Already have an account ?&nbsp;

                            <Link to="/login" className='text-white font-semibold hover:underline duration-500'>

                                Login

                            </Link>

                        </div>

                        <p className='my-1 text-xs'>
                            Terms of service and Privacy Policy
                        </p>


                    </div>
                </div>


                {
                    wrongPass &&
                    <p className='border-2 border-red-300 rounded text-center w-fit mx-auto p-2'>
                        {wrongPass} Please Retry
                    </p>
                }

            </div>
        </>
    )
}
