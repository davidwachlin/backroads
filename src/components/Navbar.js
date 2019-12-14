import React, { useState } from "react"
import { Link } from "gatsby"
import styles from "../css/navbar.module.css"
import { FaAlignRight } from "react-icons/fa"
import links from "./constants/links"
import socialIcons from "./constants/social-icons"
import logo from "../images/logo.svg"

const Navbar = () => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  return (
    <div>
      <h1>i'm navbar</h1>
    </div>
  )
}

export default Navbar
