import React from 'react'
import HeroBanner from '@/components/TechnologySolutions/HeroBanner'
import Features from '@/components/TechnologySolutions/Features'
import AboutUs from '@/components/TechnologySolutions/AboutUs'
import OurCaseStudies from '@/components/Common/OurCaseStudies'
import TeamSlider from '@/components/Common/TeamSlider'
import OurLatestBlog from '@/components/Common/OurLatestBlog'
import Footer from '@/components/Layout/Footer'
import TopHeader from "@/components/CybersecurityServices/TopHeader";
import Navbar from "@/components/Layout/Navbar";

export default function Home() {
  return (
    <>
      <TopHeader />

      <Navbar />

      <HeroBanner />

      <Features />

      <AboutUs />

      <OurCaseStudies />

      <TeamSlider />

      <OurLatestBlog />

      <Footer />
    </>
  )
}
