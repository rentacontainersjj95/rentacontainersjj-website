import TopBar from "./components/TopBar"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Whatsapp from "./components/Whatsapp";
import Hero from "./components/Hero";
import StorageContainer from "./components/StorageContainer";
import ModularContainers from "./components/ModularContainers";
import AboutUs from "./components/AboutUs";
import WhatWeProvide from "./components/WhatWeProvide";
import Maps from "./components/Maps";
import Gallery from "./components/Gallery";
import TrustedCompanies from "./components/TrustedCompanies";

export default function Home() {
  return (
    <div>
      <Whatsapp /> 
      <TopBar />
      <Header />
      <Hero />
      <AboutUs />
      <WhatWeProvide />
      <StorageContainer />
      <ModularContainers />
      <TrustedCompanies />
      <Gallery />
      <Maps />
      <Footer />
    </div>
  );
}
