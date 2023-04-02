import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
        <Link to={`/`} className='link'><img src={Logo} alt="" /></Link>
          
        </div>
        <div className="links">
          {/* <Link className='link' to="/?cat=art">
            <h5>ART</h5>
          </Link>
          <Link className='link' to="/?cat=science">
            <h5>SCIENCE</h5>
          </Link>
          <Link className='link' to="/?cat=technology">
            <h5>TECHNOLOGY</h5>
          </Link>
          <Link className='link' to="/?cat=cinema">
            <h5>CINEMA</h5>
          </Link>
          <Link className='link' to="/?cat=food">
            <h5>FOOD</h5>
          </Link>
          <Link className='link' to="/?cat=design">
            <h5>DESIGN</h5>
          </Link>

          <span>Metta</span>
          <span>Logout</span> */}
          <span className='write'>
            <Link to="/write" className='link'>Write</Link>
          </span>

        </div>
      </div>
    </div>
  )
}

export default Navbar