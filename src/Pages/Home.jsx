import React from 'react'
import Header from '../Components/Header'
import Hero from '../Sections/Hero'
import Category from '../Sections/Category'
import ProductList from '../Sections/ProductList'
import Footer from '../Components/Footer'
import Banner1 from '../Sections/Banner1'


const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        {/* <Banner1/> */}
        <Category/>
        <ProductList/>
        <Footer/>
    </div>
  )
}

export default Home