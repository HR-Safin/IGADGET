import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Data from "./Data"
const SingleProduct = () => {
  const navigate = useNavigate()
  const handleBackClick = () => {
    navigate(-1)
  }

  const {productId} = useParams()
  const singlePage = Data.find(producto => producto.id === parseInt(productId))

  const {id, details, image, price,name} = singlePage
  
  return (
    <main>
      <div className=' text-black p-4 text-center sm:text-4xl md:text-4xl text-2xl pt-20 sm:text-center md:text-center mx-auto'>
        <h2>{name}</h2>
      </div>
      <div className='sm:flex md:flex sm:flex-row md:flex-row flex-col sm:justify-center md:justify-center justify-center items-center p-10 mx-auto'>
      <div className=''>
        <img src={image} alt="" className='w-[400px] rounded-2xl ' />
      </div>
      <div className='p-3 sm:w-96 md:w-96 w-56'>
        <h2><strong>Description:</strong> {details}</h2>
        <h2><strong>Price:</strong> {price}</h2>
      </div>
      
    </div>
    <div className='flex justify-center pt-8 pb-24'>
        <button onClick={handleBackClick} className='bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg'>Back To Product</button>
      </div>
    </main>
    
  )
}

export default SingleProduct
