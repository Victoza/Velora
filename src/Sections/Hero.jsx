import React from 'react'
import Button from '../Components/Button'
import Icon from '../Components/Icon'
import { FaTruck } from 'react-icons/fa'
import { BsShieldCheck } from 'react-icons/bs'
import { BiSupport } from 'react-icons/bi'


const Hero = () => {
  return (
    <section className='relative pb-12 lg:h-screen flex flex-col md:flex-row items-center bg-cover bg-center bg-no-repeat' style={{backgroundImage: "url('/hero_bg.jpeg')"}}>
      <div className='absolute inset-0 bg-black/8 space-y-8'/>
        <div className='px-4 md:px-6 lg:px-8 py-12 space-y-4'>
            <div>
              <p>NEW SEASON, NEW YOU</p>
              <h1 className='heading1 font-playfair font-bold'>Everything you love,<br/>all in one place.</h1>
              <p className='shadow-2xl max-w-md text-gray-600 md:text-black'>Discover amazing products, unbeatable prices and a shopping experience made for you.</p>
              <div className='flex flex-col md:flex-row gap-6 py-6'>
                <button className='bg-gray-500 py-3 px-6 rounded-2xl text-white'>Shop Now</button>
                <button className='bg-gray-500 py-3 px-6 rounded-2xl text-white'>Explore Categories</button>
              </div>
              <div className='hidden md:block bg-amber-200/8 justify-between md:flex-row px-6 gap-6'>
                <Icon>
                  <FaTruck size={36}/>
                  <p>Fast & Reliable Delivery</p>
                  </Icon>
                <Icon>
                  <BsShieldCheck size={36}/>
                  <p>Fast & Reliable Delivery</p>
                </Icon>
                <Icon>
                  <BiSupport size={36}/>
                  <p>Fast & Reliable Delivery</p>
                </Icon>
                  </div>
            </div>
        </div>
    </section>
  )
}

export default Hero