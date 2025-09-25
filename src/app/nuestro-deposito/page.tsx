import React from 'react'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContainersGrid from './components/Depositos'
import Depositos from './components/Depositos'

const Containers = () => {
  return (
    <div>
        <TopBar />
        <Header />
        <Depositos />
        <Footer />
    </div>
  )
}

export default Containers