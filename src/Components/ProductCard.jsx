import React, { useState } from 'react'
import { BsHeartFill } from 'react-icons/bs'
import { IoMdHeartEmpty } from "react-icons/io";

const ProductCard = ({product}) => {
  const[liked,setLiked] = useState(false)
  return (
    <div className='relative shadow-lg rounded-2xl overflow-hidden'>
      <div className='bg-gray-100 h-64 flex items-center justify-center'>
        <img src={product.image} alt={product.title} loading='lazy' className='w-full h-full object-contain '/>
      </div>
      
      <div className='p-4 flex flex-col gap-2'>
        <h3 className='line-clamp-2 text-lg font-semibold'>{product.title}</h3>
        <p className='mt-2 line-clamp-2 text-sm text-gray-600'>${product.price}</p>
        <p>{product.category}</p>
        <p>{product?.rating?.rate} ⭐</p>
        <button className='rounded-2xl bg-black px-4 py-2 text-white cursor-pointer'>Add to Cart</button>
        <span className='absolute top-2 right-2 size-12 bg-white rounded-full flex justify-center items-center'>
          <button aria-label="wishlist button">{liked ? < BsHeartFill size={24}/> : <IoMdHeartEmpty size={24} /> }</button>
        </span>
      </div>
    </div>
  )
}

export default ProductCard