import React from 'react'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SalePurchaseTitle from './components/SalePurchaseTitle'
import SalePurchaseIntro from './components/SalePurchaseIntro'
import Typesofcontainers from './components/TypesOfContainers'

const VentaYCompra = () => {
  return (
    <div>
        <TopBar />
        <Header />
        <SalePurchaseTitle />
        <SalePurchaseIntro />
        <Typesofcontainers />
        <Footer />
    </div>
  )
}

export default VentaYCompra