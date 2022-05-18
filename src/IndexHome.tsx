import React from 'react'
import { Banner } from './components/Homepage/Banner'
import { Contact } from './components/Homepage/Contact'
import { Footer } from './components/Homepage/Footer'
import { Header } from './components/Homepage/Header'
import { IconSection } from './components/Homepage/IconSection'
import { SectionBanner } from './components/Homepage/SectionBanner'
import { SignPost } from './components/Homepage/SignPost'
import { Testimonials } from './components/Homepage/Testimonials'

export const IndexHome = () => {
  return (
    <div>
        <Header />
        <Banner/>
        <SignPost/>
        <SectionBanner/>
        <IconSection/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </div>
  )
}
