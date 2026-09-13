import React from 'react'
import { BiArrowToRight } from 'react-icons/bi'

const CatIcon = ({category,image}) => {
  return (
    <div className='flex flex-col justify-center items-center bg-gray-300 w-60 h-50 rounded-2xl' style={{backgroundImage:`url(${image})`, backgroundSize:'cover', backgroundPosition:'center'}}>
        <p className='text-xl text-blue-500 font-bold shadow-md'>{category}</p>
        <div >   
           <p className='flex justify-center items-center gap-2 text-white font-semibold'>Shop Now <BiArrowToRight size={20}/></p>
        </div> 
    </div>
  )
}

export default CatIcon