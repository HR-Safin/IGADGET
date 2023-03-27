import React from 'react'
import Img from "./image/GAdget.jpg"
import {useNavigate} from "react-router-dom"
const Home = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("product")
  }
  return (
    <div  className=' px-9  flex justify-between sm:p-10  md:p-10 space-y-4 pr-2 pl-3 h-screen'>
     
     <div className=' pt-36 space-y-4 pl-10'>
     <h2 className='sm:text-6xl md:text-6xl text-3xl'>Welcome To<strong className='text-blue-600  font-normal'> iGADGET</strong></h2>
     <p className=' sm:w-[65%] md:w-[65%] '><strong>iGADGET</strong> is a convenient online store where customers can buy anything from clothing to electronics.It offers secure payment and fast shipping, with personalized recommendations.
     <div className='pt-5'>
     <button onClick={handleClick} className='bg-gradient-to-r from-blue-700 to-blue-500 text-white pl-4 pr-4 pt-3 pb-3 rounded-md font-bold'>See Product</button>
     </div>
     


          </p>
     </div>
     
          
          
          <div>
            <img src={Img} alt="HeadPHone" className=' sm:w-[1100px] md:w-[1100px] hidden sm:hidden  md:block pt-40 sm:pt-12 md:pt-12  ' />
          </div>
          </div>
          
     
    
    
      
  )
}

export default Home
