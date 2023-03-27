import React from 'react'
import{Link} from "react-router-dom"
import Data from './Data'
const Products = () => {
   
  return (
    <>
    <div className=' w-full'>
    <h2 className='text-2xl sm:text-4xl md:text-4xl text-center sm:pb-2 md:pb-2 pb-32 font-semibold sm:pt-2 md:pt-2 pt-40'>Top Products</h2>
    
    <div className=' grid sm:grid-cols-3 md:grid-cols-3 grid-cols-1 sm:w-full md:w-full w-64 sm:gap-12 md:gap-12 gap-20  sm:p-48 md:p-48 p-6 mx-auto  rounded-md'>
      
     {Data.map((product) => {
      return (
        <div className=' shadow-lg rounded-md  space-y-4 bg-slate-200'  key={product.id}>
          <div className='text-center space-y-3'>
          <img className=' sm:w-full md:w-full w-64 text-center ' src={product.image} alt="" />
          <div>
            
          </div>
          <div className='p-2'>
          <h2 className=' font-semibold'>{product.name}</h2>
          <p>{product.details}</p>
          </div>
          
          <div className='flex justify-between p-4'>
          <span>Price: {product.price}</span>
          <Link to={`/product/${product.id}`} className="bg-blue-600 text-white pl-3 pr-3 pt-2 pb-2 rounded-md">Details</Link>
          </div>
          </div>
          
          
        </div>
      )
     })}
    </div>
    </div>
    
    </>
  )
}

export default Products
