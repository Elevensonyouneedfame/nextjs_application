import React from 'react'
import Link from 'next/link'

const HeroBanner = () => {
  return (
    <>
      <div className="cybersecurity-banner-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="cybersecurity-banner-content" data-aos="fade-left" data-aos-duration="1200" data-aos-once="true">
                <span className="sub-title">Fame Marketing</span>
                <h1>Nearby Now Application</h1>
                <Link href="/contact">
                  <a className="default-btn style-two">
                    <span className="ri-arrow-right-s-line"></span>Import Data
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="cybersecurity-banner-image" data-aos="fade-up" data-aos-duration="1200" data-aos-once="true">
                <img src="/images/Fame_circle_fullcolor.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroBanner
