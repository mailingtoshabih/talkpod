import { useState, useRef, useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { Header } from '../components/Header'
import { Roomcard } from '../components/Roomcard'
import { Startmodel } from '../components/Startmodel'
import { useSelector } from 'react-redux'
import axios from "axios"
import { useParams, useNavigate } from 'react-router-dom'
import { useWebrtc } from '../hooks/useWebrtc'
const backend = import.meta.env.VITE_APP_BACKEND;



export const Room = () => {

    const navigate = useNavigate();
    const { id: roomId } = useParams();
    const user = useSelector((state) => state.auth.user)
    const { clients, provideRef, handleMute } = useWebrtc(roomId, user);



    const [room, setRoom] = useState("");

    useEffect(() => {
        const search = async () => {
            const res = await axios.post(backend + "/room/getroom", { id: roomId });
            res && setRoom(res.data);
        }
        search();
    }, [roomId])




    const [isMute, setMute] = useState(true);



    useEffect(() => {
        handleMute(isMute, user._id);
    }, [isMute]);



    const handleMuteClick = (clientId) => {
        if (clientId !== user._id) return;
        setMute(!isMute);
    }

    // mute not working






    return (
        <>
            <Navbar />


            <div className='h-screen mt-20 p-2 sm:px-10 max-w-7xl mx-auto'>

                <div className='my-5 sm:my-10 flex justify-between'>
                    <div className='font-semibold text-gray-700 text-xl md:text-2xl xl:text-3xl my-auto'>
                        {room && room.roomTopic}
                        {/* Why Artificial Intelligence is the future? */}
                    </div>

                    <button className="text-xs sm:text-sm w-fit h-12 p-1 px-4 text-center rounded-full text-white font-semibold  bg-gradient-to-r from-orange-600 to-red-600 shadow-lg hover:shadow-2xl shadow-orange-600 hover:shadow-orange-600 duration-700" onClick={() => navigate(-1)}>
                        Leave Room
                    </button>
                </div>



                {/* change id to _id */}
                {/* IN room refresh not persisting problems */}
                {/* IN room closing tab quits entire room*/}
                {/* grid gap-5 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 shrink-0 */}




                <div className='rounded-t-lg 
                     h-full p-2 sm:p-5 
                    grid grid-cols-2 gap-x-3 sm:flex sm:flex-wrap sm:space-x-5
                     '>
                    {
                        clients &&
                        clients?.map((client) => {
                            return (

                                // Person card
                                <div key={client._id}
                                    className='w-fit rounded-lg bg-white h-fit text-center'>

                                    <audio
                                        ref={(instance) => provideRef(instance, client._id)}
                                        autoPlay
                                        muted={false}
                                    >
                                    </audio>

                                    <div className='border-4 border-purple-300 rounded-xl h-28 w-28 mx-auto'>
                                        <img src={client?.pic}
                                            alt=""
                                            className='rounded-lg h-full w-full object-cover' />
                                    </div>

                                    <div className='mt-3 font-semibold text-gray-600'>
                                        {client?.name}

                                        <div className='my-2 mx-auto w-fit'
                                            onClick={() => { handleMuteClick(client._id) }}>
                                            {
                                                client.muted ?
                                                    (
                                                        <svg className="w-10 h-7 bg-red-500 rounded-full p-1 text-white mx-auto cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                            <path d="M9.547 3.062A.75.75 0 0110 3.75v12.5a.75.75 0 01-1.264.546L4.703 13H3.167a.75.75 0 01-.7-.48A6.985 6.985 0 012 10c0-.887.165-1.737.468-2.52a.75.75 0 01.7-.48h1.535l4.033-3.796a.75.75 0 01.811-.142zM13.28 7.22a.75.75 0 10-1.06 1.06L13.94 10l-1.72 1.72a.75.75 0 001.06 1.06L15 11.06l1.72 1.72a.75.75 0 101.06-1.06L16.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L15 8.94l-1.72-1.72z" />
                                                        </svg>
                                                    )
                                                    :
                                                    (
                                                        <svg className="w-10 h-7 bg-green-500  rounded-full p-1 text-white mx-auto cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                            <path d="M10 3.75a.75.75 0 00-1.264-.546L4.703 7H3.167a.75.75 0 00-.7.48A6.985 6.985 0 002 10c0 .887.165 1.737.468 2.52.111.29.39.48.7.48h1.535l4.033 3.796A.75.75 0 0010 16.25V3.75zM15.95 5.05a.75.75 0 00-1.06 1.061 5.5 5.5 0 010 7.778.75.75 0 001.06 1.06 7 7 0 000-9.899z" />
                                                            <path d="M13.829 7.172a.75.75 0 00-1.061 1.06 2.5 2.5 0 010 3.536.75.75 0 001.06 1.06 4 4 0 000-5.656z" />
                                                        </svg>
                                                    )
                                            }
                                        </div>



                                    </div>

                                </div>
                            )
                        })
                    }
                </div>



            </div>
        </>
    )
}
