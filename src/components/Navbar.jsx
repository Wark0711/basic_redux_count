import React from 'react'
import logo from '../assets/Group 114.png'
import img2 from '../assets/Ellipse 16.png'
import img3 from '../assets/Ellipse 19-1.png'
import img4 from '../assets/Ellipse 20.png'

function Navbar() {

  function toggleData() {
    let x = document.querySelector("#navbars");
    if (x.className === "nav-bars") {
      x.className += "-resp";
    }
    else {
      x.className = "nav-bars";
    }
    console.log(x);
  }

  return (
    <div className='nav'>
      <div className="nav-sect">
        <div className="nav-logo"><img src={logo} alt="" /></div>
        <div className="right">
          <div className="nav-bars" id='navbars'>
            <div className="nav-bar">Home</div>
            <div className="nav-bar">Services</div>
            <div className="nav-bar">Pricing</div>
            <div className="nav-bar">About Us</div>
            <div className="nav-bar nav-bar-last">Start a Company</div>
            <div onClick={() => toggleData()} className=" nav-hamburger">
              <div className='nav-ham'></div>
              <div className='nav-ham'></div>
              <div className='nav-ham'></div>
            </div>
          </div>
        </div>
      </div>
      <div className='nav-search'>
        <input type="text" placeholder='Search a Term | Topic' />
      </div>
      <div className="nav-img">
        <img className='img2' src={img2} alt="no-img" />
        <img className='img3' src={img3} alt="no-img" />
        <img className='img4' src={img4} alt="no-img" />
      </div>
    </div>
  )
}

export default Navbar