import React from 'react'
import HeroSection from '../components/HeroSection'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Testimonials from '../components/Testimonials'
import Cta from '../components/Cta'
import Footer from '../components/Footer'
import TestimonialsSection from '../components/Testimonials'

const Home = () => {
  return (
    <div>
  <HeroSection/>
  <Features/>
  <HowItWorks/>
  <TestimonialsSection/>
  <Cta/>
  <Footer/>
    </div>
  )
}

export default Home
