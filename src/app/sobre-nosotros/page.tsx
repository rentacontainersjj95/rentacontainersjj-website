import React from 'react'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import AboutTitle from './components/AboutTitle'
import AboutIntro from './components/AboutIntro'
import AboutFeatures from './components/AboutFeatures'
import AboutServices from './components/AboutServices'

const page = () => {
  return (
    <div>
        <TopBar/>
        <Header />
        <AboutTitle />
        <AboutIntro />
        <AboutFeatures />
        <AboutServices />
        <Footer />
    </div>
  )
}

export default page