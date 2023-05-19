import logo from "../assets/cos.png"
// import tailwind from "../tailwind";
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";
import { useSelector } from "react-redux";




const extractFirstName = (name) => {
  // Split the full name into an array of its individual words
  const nameArr = name?.split(" ");

  let firstName;
  // Get the first word (which is the first name)
  if (nameArr) firstName = nameArr[0];


  // Return the first name with "..." after it
  return firstName + " "
}

function color() {
  const c = ['red', 'green', 'violet', 'indigo', 'purple', 'orange', 'yellow', 'rose']
  return c[Math.floor(Math.random() * c.length) + 1];
}
const c = color();



const style = `p-3 sm:p-4 w-66 h-60 sm:h-52  font-semibold text-gray-600 rounded-xl cursor-pointer bg-white 
shadow-[0px_0px_20px_1px_#B2F5EA] hover:shadow-xl hover:shadow-violet-600
hover:transition duration-700 
hover:outline hover:outline-violet-700`




export const Roomcard = ({ data }) => {

  const navigate = useNavigate();

  const clients = useSelector((state) => state.client.clients);



  return (
    <>

      <div className={style}
        onClick={() => navigate(`/room/${data?._id}`)}>




        {/* Room topic */}
        <div className=' h-1/6  text-md sm:text-sm'>
          {data?.roomTopic}
        </div>


        {/* room image */}
        <div className=' h-5/6 mt-2 my-auto flex justify-between'>

          <div className="w-full flex justify-between">

            <div className="flex -space-x-7 w-4/6 py-2 ">
              {/* change it to one single room topic picture, make modal, route, and more */}
              {/* and description, for links and more */}

              <img
                className={`h-full rounded-xl object-cover`}
                src={data?.pic} alt="" />

            </div>



            <div className="w-2/6 pl-2">


              <div className='my-auto h-5/6 py-2 '>

                <p className="text-violet-600 font-extrabold my-1 text-md md:text-md">Speakers</p>

                <div className="flex space-x-1">
                  {clients[0] && <hr className="bg-green-400 w-1 h-1 rounded my-auto " />}
                  <span>{clients && extractFirstName(clients[0]?.name)}</span>
                </div>

                <div className="flex space-x-1">
                  {clients[1] && <hr className="bg-green-400 w-1 h-1 rounded my-auto " />}
                  <span>{clients[1] && extractFirstName(clients[1]?.name)}</span>
                </div>

                <div className="flex space-x-1">
                  {clients[2] && <hr className="bg-green-400 w-1 h-1 rounded my-auto " />}
                  <span>{clients[2] && extractFirstName(clients[0]?.name)}</span>
                </div>

              </div>


              <div className='h-1/6 flex justify-end space-x-1'>
                <p className="my-auto">
                  {clients?.length} 👤
                </p>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                  className="w-6 h-6 my-auto">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>

              </div>

            </div>

          </div>




        </div>







      </div>
    </>
  )
}
