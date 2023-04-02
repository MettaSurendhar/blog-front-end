import React from 'react'
import Logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>Made with ♥️ and <strong>ReactJS</strong></span>
    </footer>
  )
}

export default Footer