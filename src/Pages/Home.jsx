import React from 'react'
import Header from '../Components/Header'
import Hero from '../Sections/Hero'
import Category from '../Sections/Category'
import ProductList from '../Sections/ProductList'
import Footer from '../Components/Footer'


const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <main>
          <Category/>
          <ProductList/>
        </main>
        <Footer/>
    </div>
  )
}

export default Home