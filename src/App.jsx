import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import HeroSection from './Components/HeroSection'
import Features from './Components/Features'
import BusinessSolutions from './Components/BusinessSolutions'
import KnowUsBetter from './Components/KnowUsBetter'
import FinancialPlan from './Components/FinancialPlan'
import Testimonials from './Components/Testimonial'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* header */}
      <Header />
      {/* hero section */}
      <HeroSection />
      {/* features */}
      <Features />
      {/* business solutions */}
      <BusinessSolutions />
      {/* know us better */}
      <KnowUsBetter />
      {/* financial plan */}
      <FinancialPlan />
      {/* testimonials */}
      <Testimonials />
      {/* footer */}
      <Footer />
    </>
  )
}

export default App
