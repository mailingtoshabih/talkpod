import logo from "../assets/cos.png"
// import tailwind from "../tailwind";
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";
import { useSelector } from "react-redux";

const style = `p-3 sm:p-4 w-66 h-60 sm:h-52  font-semibold text-gray-600 rounded-xl cursor-pointer bg-white 
shadow-[0px_0px_20px_1px_#B2F5EA] hover:shadow-violet-500
hover:transition duration-700 
hover:outline hover:outline-violet-800`


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
  const colors = ['red', 'green', 'violet', 'indigo', 'purple', 'orange', 'yellow', 'rose']
  return colors[Math.floor(Math.random() * 10) + 1];
}







export const Roomcard = ({ data }) => {

  const navigate = useNavigate();

  const clients = useSelector((state) => state.client.clients);



  return (
    <>

      <div className={style}
        onClick={() => navigate(`/room/${data?._id}`)}>




        {/* Room topic */}
        <div className=' h-1/6  text-md sm:text-sm'>
          {data?.roomTopic} gas to this greater wok of interest that is. Greater extent
        </div>


        {/* room image */}
        <div className=' h-5/6 mt-2 my-auto flex justify-between'>

          <div className="w-full flex justify-between">

            <div className="flex -space-x-7 w-4/6 py-2">
              {/* change it to one single room topic picture, make modal, route, and more */}
              {/* and description, for links and more */}

              <img
                className={`h-full shadow-xl shadow-${color()}-500 rounded-xl object-cover`}
                src={clients[0] ? logo : logo} alt="" />

            </div>



            <div className="w-2/6 pl-2">


              <div className='my-auto h-5/6 py-2 '>

                <p className="text-violet-600 font-extrabold my-1 text-md md:text-md">Speakers</p>

                <div className="flex space-x-1">
                  <hr className="bg-green-400 w-1 h-1 rounded my-auto " />
                  <span>{clients && extractFirstName(clients[0]?.name)}</span>
                </div>
                <div className="flex space-x-1">
                  <hr className="bg-green-400 w-1 h-1 rounded my-auto " />
                  <span>{clients && extractFirstName(clients[0]?.name)}</span>
                </div>
                <div className="flex space-x-1">
                  <hr className="bg-green-400 w-1 h-1 rounded my-auto " />
                  <span>{clients && extractFirstName(clients[0]?.name)}</span>
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
