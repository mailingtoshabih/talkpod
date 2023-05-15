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


    





    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email) {

            try {
                const user = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    pass
                );
                console.log(user)

                const { data } = await axios.post(`${backend}/auth/signup`, { email });
                data && dispatch(setAuth(data));
            }
            catch (exc) {
                console.log(exc.message)
            }

            // onNext(e);
        }

    }







    return (
        <>
            <div>

                <div className='mt-20 h- text-white  px-20 py-10 mx-auto w-fit text-center bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:shadow-2xl hover:shadow-cyan-500 duration-1000'>

                    <p className='font-semibold'>Signup For Talkpod</p>


                    <div className='mt-5'>


                        <input
                            className='my-5 block w-72 p-2 text-center rounded-md outline-none text-gray-600 font-semibold placeholder:text-gray-400'
                            placeholder='example@gmail.com'
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />


                        <input
                            className='my-5 block w-72 p-2 text-center rounded-md outline-none text-gray-600 font-semibold'
                            type="password"
                            placeholder='******'
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button className='bg-white px-4 py-2 text-violet-600 text-sm font-semibold rounded-full'
                            onClick={handleSubmit}>
                            Next
                        </button>

                        <p className='my-5 text-xs'>
                            By entering your email, you're agreeing to our<br />Terms of service and Privacy Policy
                        </p>


                    </div>
                </div>

            </div>
        </>
    )
}
