import React from 'react'
import CatIcon from '../Components/CatIcon'
import img1 from '/denim-shirt.png'
import img2 from '/purple-gown.png'

const Category = () => {
  return (
    <section className='py-12'>
      <div className='px-4 md:px-6 lg:px-10'>
        <h3 className='text-xl md:text-2xl lg:text-3xl font-poppins font-bold'>Shop by Category</h3>
        <p className='text-gray-600 font-playfair'>Find what you're looking for across all categories.</p>
        <div className='overflow-x-auto py-6'>
          <div className='flex justify-center items-center min-w-max gap-6'>
            <CatIcon image={img1} category="Men's Clothing"></CatIcon>
            <CatIcon image={img2} category="Men's Clothing"></CatIcon>
            <CatIcon image={img1} category="Men's Clothing"></CatIcon>
            <CatIcon image={img2} category="Men's Clothing"></CatIcon>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Category