import React from 'react'
import img1 from '../assets/ILLUSTRATION 03.png'
import img2 from '../assets/Group-2.png'
import arrow from '../assets/Vector.png'
import group from '../assets/Group.png'
import group1 from '../assets/Group-1.png'
import img3 from '../assets/Ellipse 24.png'
import img4 from '../assets/Ellipse 16.png'
import img5 from '../assets/Ellipse 19.png'
import img6 from '../assets/Ellipse 28.png'
import img7 from '../assets/Ellipse 25.png'
import img8 from '../assets/Ellipse 11.png'

function Secondcomp() {
  return (
    <div className='second'>
      <div className="second-flex">
        <div className="sec-flex sec-left">
          <div className="sec-box sec-left1">
            <div>
              <p className='left-text'>Learn the ways in which you can benefit from a UAE/Offshore Company. Then get started on fulfilling your UAE dream.</p>
            </div>
            <div>
              <p className='sec-head'>Claim a Free Quote</p>
            </div>
          </div>
          <div className="sec-box sec-left2">
            <div className="left2-pic">
              <img src={img1} alt="" />
            </div>
            <div className="left2 left2-heading">
              <h4>Bank Accounting Setup</h4>
            </div>
            <div className="left2 left2-text">
              <p className='txt'>There are many banks in the United Arab Emirates [UAE]. Both locally owned and branches of multinational ones. Foreign banks adjust according to their parent’s strategies and have changed local requirements overnight in the past. But we are here to help you.</p>
            </div>
            <div className="left2 left2-link">
              <div className='left-link-text'>Learn More</div>
              <div className='right-link-pic'><img src={arrow} alt="" /></div>
            </div>
          </div>
          <div className="sec-box sec-left3">
            <div className="left3-pic">
              <img src={img2} alt="" />
            </div>
            <div className="left3 left3-head">
              <h4>UAE Company Visas</h4>
            </div>
            <div className="left3 left3-text">
              <p className='txt'>Your application for visas is critical especially if you intend to move to Dubai. This becomes even more urgent if your family will also move with you. All the paperwork is done on your behalf smoothly so that you may only focus on doing what matters most to you.</p>
            </div>
            <div className="left3 left3-link">
              <div className='left-link-text'>Learn More</div>
              <div className='right-link-pic'>
                <img src={arrow} alt="" /></div>
            </div>
          </div>
        </div>
        <div className="sec-flex sec-right">
          <div className="sec-box sec-right1">
            <div className="right1 right1-pic">
              <img src={group} alt="" />
            </div>
            <div className="right1 right1-head">
              <h4>Advice & Guidance</h4>
            </div>
            <div className="right1 right1-text">
              <p className='txt'>All activities in the UAE are licensed. Whether manufacturing, finance, trading, marketing, consultancy or restaurants. In some countries only manufacturing is licensed. In others there is a threshold below which business are encouraged. Get our insightfull guidance today.</p>
            </div>
            <div className="right1 right1-link">
              <div className='right-link-text'>Learn More</div>
              <div className='right-link-pic'>
                <img src={arrow} alt="" />
                </div>
            </div>
          </div>
          <div className="sec-box sec-right2">
            <div className="right2 right2-pic">
              <img src={group1} alt="" />
            </div>
            <div className="right2 right2-head">
              <h4>Registration Document Perparation</h4>
            </div>
            <div className="right2 right2-text">
              <p className='sec-txt'>Several documents must be prepared to start the process of registering a new company in the United Arab Emirates. Be it a Dubai local company, a free zone one or an offshore entity. Your registered agent is dedicated to get this done for you for a seamless process.</p>
            </div>
            <div className="right2 right2-link">
              <div className='right-link-text'>Learn More</div>
              <div className='right-link-pic'>
                <img src={arrow} alt="" />
                </div>
            </div>
          </div>
          <div className="sec-box sec-right3">
            <div>
              <p className='right-text'>We have gathered a team of professionals to craft adequate services you can rely on for a friction free setup in UAE.</p>
            </div>
            <div className='right3 right3-link'>
              <div className='right-link-text'>More about our services</div>
              <div className='right-link-pic'>
                <img src={arrow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-img">
        <div className='img3'><img src={img3} alt="" /></div>
        <div className="img4"><img src={img4} alt="" /></div>
        <div className='img5'><img src={img5} alt="" /></div>
        <div className='img6'><img src={img6} alt="" /></div>
        <div className='img7'><img src={img7} alt="" /></div>
        <div className='img8'><img src={img8} alt="" /></div>
      </div>
    </div>
  )
}

export default Secondcomp