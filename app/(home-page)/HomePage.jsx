import React from 'react'
import HeroSection from './(sections)/hero-section'
import AboutSection from './(sections)/about-section'
import DefinesUs from './(sections)/defines-us'
import OurBusiness from './(sections)/our-business'
import NumbersSection from './(sections)/numbers-section'
import Services from './(sections)/services'
import StepsSection from './(sections)/steps-section'
import GetStarting from './(sections)/get-starting'
import PartnerSection from './(sections)/partner-section'
import QuestionSection from './(sections)/question'
import ContactSection from './(sections)/contact-section'
import NewsLitter from './(sections)/newslitter'

const HomePage = () => {
  return (
    <div>
        <HeroSection />
        <AboutSection />
        <DefinesUs />
        <OurBusiness />
        <NumbersSection />
        <Services />
        <StepsSection />
        <GetStarting />
        <PartnerSection />
        <QuestionSection />
        <ContactSection />
    </div>
  )
}

export default HomePage