import React, { useState } from 'react'
import Link from '@/utils/ActiveLink'

const Navbar = () => {
  const [menu, setMenu] = React.useState(true)
  const toggleNavbar = () => {
    setMenu(!menu)
  }
  React.useEffect(() => {
    let elementId = document.getElementById('navbar')
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        elementId.classList.add('is-sticky')
      } else {
        elementId.classList.remove('is-sticky')
      }
    })
  })

  const classOne = menu
    ? 'collapse navbar-collapse mean-menu justify-content-end'
    : 'collapse navbar-collapse show justify-content-end'
  const classTwo = menu
    ? 'navbar-toggler navbar-toggler-right collapsed'
    : 'navbar-toggler navbar-toggler-right'

  return (
    <>
      <div id="navbar" className="navbar-area navbar-area-with-position-relative">
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container-fluid">
            <Link href="/">
              <a className="navbar-brand logo">
                <img src="/images/logo.svg" alt="Fame Marketing Logo" />
              </a>
            </Link>

            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="/" activeClassName="active">
                    <a className="nav-link">Home</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/about-us" activeClassName="active">
                    <a className="nav-link">About Us</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <a href="#" className="dropdown-toggle nav-link">
                    Services
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/services" activeClassName="active">
                        <a className="nav-link">Services</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/service-details" activeClassName="active">
                        <a className="nav-link">Services Details</a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a href="#" className="dropdown-toggle nav-link">
                    Case Studies
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/case-studies" activeClassName="active">
                        <a className="nav-link">Case Studies</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/case-studies-2" activeClassName="active">
                        <a className="nav-link">Case Studies #2</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/case-studies-3" activeClassName="active">
                        <a className="nav-link">Case Studies #3</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/case-studies-details" activeClassName="active">
                        <a className="nav-link">Case Studies Details</a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link href="/team" activeClassName="active">
                    <a className="nav-link">Team</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/pricing" activeClassName="active">
                    <a className="nav-link">Pricing</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/blog" activeClassName="active">
                    <a className="nav-link">Blog</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/contact" activeClassName="active">
                    <a className="nav-link">Contact</a>
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
