import logo from "../assets/default.jpeg"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";
import { useSelector } from "react-redux";

const style = `p-3 sm:p-4 w-66 h-36 sm:h-44 text-xs sm:text-sm md:text-md font-semibold text-gray-600 rounded-xl cursor-pointer bg-white 
shadow-[0px_0px_20px_1px_#B2F5EA] hover:shadow-violet-500
hover:transition duration-700 
hover:outline hover:outline-violet-800`










export const Roomcard = ({ data }) => {

  const navigate = useNavigate();

  const clients = useSelector((state) => state.client.clients);
  
  

  return (
    <>

      <div  className={style}
        onClick={()=>navigate(`/room/${data?._id}`)}>


        {/* Room topic */}
        <div className='h-2/6'>
          {data?.roomTopic}
        </div>


        {/* speakers and name of speakers */}
        <div className='h-3/6 mt-2 my-auto flex justify-between'>

          <div className="w-full flex justify-between">

            <div className="flex -space-x-7">

              <img className="w-14 h-14 border-3 border-gray-600 bg-gray-500 rounded-full object-cover outline" src={clients[0] ? clients[0]?.pic : logo} alt="" />
              <img className="w-14 h-14 rounded-full bg-gray-500 object-cover outline" src={clients[1] ? clients[1]?.pic: logo} alt="" />
              {/* <a className="flex items-center justify-center w-12 h-12 text-sm font-semibold text-white bg-gray-400 rounded-full" href="/">
              +99
            </a> */}
            </div>


            <div className='p-1 my-auto h-full text-center'>
              <p className="text-violet-600 font-bold ">Speakers</p>
              <hr className="border border-gray-100"/>
              <p>{clients && clients[0]?.name}</p>
              <p>{clients && clients[1]?.name}</p>
              <p>{clients && clients[2]?.name}</p>
              
            </div>

          </div>




        </div>


        <div className='h-1/6'>
          {clients?.length} 👤
        </div>




      </div>
    </>
  )
}
