import React from 'react'

import Icon from '../Components/Icon'
import { FaTruck } from 'react-icons/fa'
import { BsShieldCheck } from 'react-icons/bs'
import { BiSupport } from 'react-icons/bi'

const Banner1 = () => {
  return (
    <section className='py-8'>
        <div className='bg-amber-200/8 justify-between flex flex-col md:flex-row px-6 gap-6'>
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
    </section>
  )
}

export default Banner1