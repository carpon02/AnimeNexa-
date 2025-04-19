import React from 'react'
import Hero from '../components/Hero'
import LatestNfts from '../components/LatestNfts'
import Creators from '../components/Creators'
import HowItWorks from '../components/HowItWorks'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Hero/>
      <LatestNfts/>
      <Creators/>
      <HowItWorks/>
      <Banner/>
      <Footer/>
    </>
  )
}

export default Home
