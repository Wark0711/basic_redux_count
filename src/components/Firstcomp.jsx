import React from 'react'
import img1 from '../assets/ILLUSTRATION.png'
import img2 from '../assets/Group 117.png'
import img3 from '../assets/dungeon.png'
import img4 from '../assets/Vector-2.png'
import img5 from '../assets/Vector-1.png'
import img6 from '../assets/Ellipse 21.png'
import img7 from '../assets/Ellipse 11.png'
import img8 from '../assets/Ellipse 17.png'


function Firstcomp() {
  return (
    <div className='first'>
      <div className='first-grid'>
        <div className="first-one">
          <div>
            <p>Claim a Free Quote</p>
            <h2><span>Get started</span> on fulfilling <div>your Dubai or UAE</div> dream.</h2>
          </div>
        </div>
        <div className="first-two">
          <img src={img1} alt="nil" />
        </div>
        <div className="first-third">
          <div className='first-third text1'>UAE & Offshore Company</div>
          <div className='first-third text2'> We provide you with information about UAE or Offshore Company Registration & help you setup your company with a bank account and visas.
          </div>
          <div className="first-third btn">
            <div className='first-btn btn1'>Start a Company</div>
            <div className='first-btn btn2'>Renew a Company</div>
          </div>
        </div>
      </div>
      <div className="first-four">
        <div className="four-text">Watch the video about UAE or Offshore Company Registration</div>
        <img src={img2} alt="" />
      </div>
      <div className="first-five">
        <div className="five-head">
          <h3>
            <div className='head-text'>Dedicated</div>
            <div>to our mission we are</div>
          </h3>
        </div>
        <div className="five-text">
          Our Services include Company Formation & Rewards Trust & Fiducary, Tax Residency Setup With Family, Bank Accounts, Remote Management, Stock Trading Platforms, Ownweship Solutions
        </div>
      </div>
      <div className="first-six">
        <div className="six-sect sect-one">
          <div className="one-img"><img src={img3} alt="" /></div>
          <div className="one-head"><h4>UAE Free Zone Company</h4></div>
          <div className="one-text txt">Your registration agent, will answer all of your questions and help you to reach a conclusion that meets your objectives of investing in the UAE.</div>
          <div className='six-btn'>Get Started</div>
        </div>
        <div className="six-sect sect-two">
          <div className="two-img"><img src={img4} alt="" /></div>
          <div className="two-head"><h4>Dubai Local Companies</h4></div>
          <div className="two-text txt">The Dubai LLC formation documents are actually articles of organization or a certificate of organization. You can get yours today.</div>
          <div className='six-btn'>Get Started</div>
        </div>
        <div className="six-sect sect-three">
          <div className="three-img"><img src={img5} alt="" /></div>
          <div className="three-head"><h4>Offshore Companies</h4></div>
          <div className="three-text txt">You can register an offshore company and open its bank account in Dubai. Your agent will help you along all the process</div>
          <div className='six-btn'>Get Started</div>
        </div>
      </div>
      <div className="first-pic">
        <div><img className='pic6' src={img6} alt="" /></div>
        <div><img className='pic7' src={img7} alt="" /></div>
        <div><img className='pic8' src={img8} alt="" /></div>
      </div>
    </div>
  )
}

export default Firstcomp