import React from 'react'
import AboutContainerMarking from './components/AboutContainerMarking'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CSCInspections from './components/CSCInspections'
import CSCPlates from './components/CSCPlates'

const MarkingOfContainers = () => {
  return (
    <div>
        <TopBar />
        <Header />
        <AboutContainerMarking />
        <CSCPlates />
        <CSCInspections />
        <Footer />
    </div>
  )
}

export default MarkingOfContainers