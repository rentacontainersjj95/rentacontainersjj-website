import React from 'react'
import ConversionTitle from './components/ConversionTitle'
import ConversionIntro from './components/ConversionIntro'
import Footer from '../components/Footer'
import TopBar from '../components/TopBar'
import Header from '../components/Header'

const ConversionDeContenedores = () => {
  return (
    <div>
        <TopBar />
        <Header />
        <ConversionTitle />
        <ConversionIntro />
        <Footer/>
    </div>
  )
}

export default ConversionDeContenedores