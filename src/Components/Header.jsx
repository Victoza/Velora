import React, { useState } from 'react'
import { BiCart, BiHeart, BiMenu, BiUser } from 'react-icons/bi'
import { FaSearch } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import { BsShopWindow } from "react-icons/bs";

const Header = () => {
    const[isMenuOpen,setIsMenuOpen] = useState(false)
    const toggleMenu = () => {setIsMenuOpen(prev => !prev)}
  return (
    <section className='bg-white shadow-md py-6'>
        <div className='px-4 md:px-8 lg:px-8 flex justify-between items-center '>
            <div className='flex justify-between items-center gap-4'>
                <h3 className='text-xl md:text-2xl lg:text-3xl font-bold'>Velora</h3>
                <BsShopWindow size={36} className=''/>
            </div>
                <nav className='hidden lg:block'>
                    <ul className='flex justify-between items-center gap-4 font-semibold'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Categories</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <div className='hidden lg:flex justify-between gap-12'>
                    <div className='relative flex justify-between items-center gap-4'>
                        <input type="text" />
                        <FaSearch/>
                    </div>
                    <div className='flex justify-between items-center gap-4'>
                        <BiHeart size={24}/>
                        <BiCart size={24}/>
                        <BiUser size={24}/>
                    </div>
                </div>
            
            <button onClick={toggleMenu} className='block lg:hidden font-bold'>
                {isMenuOpen ? <MdClose size={36}/> : <BiMenu size={36}/>}
            </button>
            
        </div>
        {isMenuOpen && (
            <nav className='lg:hidden bg-white py-4'>
                <ul className='flex flex-col justify-between items-center gap-4'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Categories</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            )}
    </section>
  )
}

export default Header