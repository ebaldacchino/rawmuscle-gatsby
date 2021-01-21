import React, { useState, useEffect } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import SEO from "./SEO"
import Sidebar from "./Sidebar"
import useApp from "../functions/useApp"
import { FaArrowCircleUp } from "react-icons/fa"

const Layout = ({ children, title, description, footerOnScreen }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const { offset, windowHeight } = useApp()

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <>
      <SEO title={title} description={description} />
      <Navbar toggle={toggle} isOpen={isOpen} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <main>{children}</main>
      {offset > windowHeight / 2 && (
        <FaArrowCircleUp className="scrollTop" onClick={scrollTop} />
      )}
      <Footer onScreen={footerOnScreen} />
    </>
  )
}

export default Layout
