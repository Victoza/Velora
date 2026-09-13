import React from 'react'
import { BiCart, BiHeart, BiUser } from 'react-icons/bi'
import { FaInstagram, FaPinterest, FaSearch, FaTwitter, FaYoutube } from 'react-icons/fa'
import Icon from './Icon'
import { FaFacebook } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='py-8 px-4 bg-gray-100'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 pb-6'>
          {/* 1st div */}
          <div className='space-y-6'>
            <h3>Velora</h3>
            <p>Your one-stop shop for fashion, electronics, jewelry and more</p>
            <div className='flex gap-4'>
              <Icon><FaFacebook/></Icon>
              <Icon><FaInstagram/></Icon>
              <Icon><FaTwitter/></Icon>
              <Icon><FaYoutube/></Icon>
              <Icon><FaPinterest/></Icon>
            </div>
          </div>
          {/* 2nd div */}
          <div className='flex flex-col'>
            <h4 className='mb-2'>Quick Links</h4>
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">Categories</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
          {/* 3rd div */}
          <div className='flex flex-col'>
            <h4 className='mb-2'>Customer Support</h4>
            <p>Help Center</p>
            <p>Shipping Info</p>
            <p>Returns & Refunds</p>
            <p>FAQs</p>
            <p>Track Order</p>

          </div>
          {/* 4th div */}
          <div className=''>
            <h4>Join our Newsletter</h4>
            <p>Get the latest updates, offers and more.</p>
            <form className='py-4 flex items-stretch relative'>
              <input type="text" placeholder='Enter your e-mail address' className='min-w-0 flex-1 rounded-l-full bg-white px-5 py-3 text-sm text-gray-900 outline-none placeholder:text-gray-400'/>
              <button type='submit' className='rounded-r-full bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 cursor-pointer'>Subscribe</button>
            </form>
          </div>

        </div>
        <hr />
        <div className='py-4 flex flex-col md:flex-row'>
          <p>&copy; 2026 Velora. All rights reserved.</p>
          <div>

          </div>
        </div>
    </footer>
  )
}

export default Footer