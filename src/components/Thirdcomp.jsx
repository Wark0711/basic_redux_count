import React from 'react'
import tick from '../assets/Group 35.png'
import img1 from '../assets/Ellipse 27.png'
import img2 from '../assets/Ellipse 8.png'
import img3 from '../assets/Ellipse 11.png'
import { useState, useEffect } from 'react'
import Pagination from './Pagination'

function Thirdcomp() {
    const [data, setData] = useState([])
    const totalPosts = 3;
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(1)

    useEffect(() => {
        let pages1 = document.getElementById('box1')
        let pages2 = document.getElementById('box2')
        let pages3 = document.getElementById('box3')
        setData([pages1, pages2, pages3])
    }, [])

    function Pagination({ totalPosts, postsPerPage, setCurrentPage }) {
        let pages = []
        for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
            pages.push(i)
        }

        return (
            <div className='pagination'>
                {
                    pages.map((page, index) => {
                        return <div key={index} className={'pagin paginate' + page} onClick={() => setCurrentPage(page)}></div>
                    })
                }
            </div>
        )
    }

    function toggleData() {
        if (currentPage === 1) {
            data[0].style.display = 'block'
            data[0].style.width = 'auto'
            data[1].style.display = 'none'
            data[2].style.display = 'none'

        }
        else if (currentPage === 2) {
            data[0].style.display = 'none'
            data[1].style.display = 'block'
            data[1].style.width = 'auto'
            data[2].style.display = 'none'
        }
        else if (currentPage == 3) {
            data[0].style.display = 'none'
            data[1].style.display = 'none'
            data[2].style.display = 'block'
            data[2].style.width = 'auto'
        }

        if(window.innerWidth > '768px'){
            console.log('Hello');
        }
    }
    return (
        <div className='third'>
            <div className="third-space">
                <div className="third-head"><h3><div>Most <span>popular affordable pricing</span> per</div>
                    <div>jurisdictions are brought to you to</div>
                    <div>kick off your adventure.</div></h3></div>
            </div>
            <div className="third-flex">
                <div id='box1' className="third-box flex-sect1">
                    <div className="sect1-head">AJMAN OFFSHORE</div>
                    <div className="sect1-pay">$2,997 <span>One Time Payment</span></div>
                    <div className="sect1-text">
                        <div>Ajman Offshore New Company</div>
                        <div>formation includes</div>
                    </div>
                    <div className="sect1-points">
                        <div className="sect1-point">
                            <div className="point-pic">
                                <img src={tick} alt="" />
                            </div>
                            <div className="point-text">Attestation Charges</div>
                        </div>
                        <div className="sect1-point">
                            <div className="point-pic">
                                <img src={tick} alt="" />
                            </div>
                            <div className="point-text">Registered Agent</div>
                        </div>
                        <div className="sect1-point">
                            <div className="point-pic">
                                <img src={tick} alt="" />
                            </div>
                            <div className="point-text">Registered Office</div>
                        </div>
                        <div className="sect1-point">
                            <div className="point-pic">
                                <img src={tick} alt="" />
                            </div>
                            <div className="point-text">Varal Administrative</div>
                        </div>
                        <div className="sect1-point">
                            <div className="point-pic">
                                <img src={tick} alt="" />
                            </div>
                            <div className="point-text">Preparing Statutory File</div>
                        </div>
                        <div className="sect1-point">
                            <div className="point-pic">
                                <img src={tick} alt="" />
                            </div>
                            <div className="point-text">Liasing with Registration Authorities</div>
                        </div>
                        <div className="sect1-point">
                            <div className="point-pic">
                                <img src={tick} alt="" />
                            </div>
                            <div className="point-text">Due Diligence Appraisal</div>
                        </div>
                        <div className="sect1-point">
                            <div className="point-pic">
                                <img src={tick} alt="" />
                            </div>
                            <div className="point-text">Keeping The Register</div>
                        </div>
                        <div className="sect1-point">
                            <div className="point-pic">
                                <img src={tick} alt="" />
                            </div>
                            <div className="point-text">Seal Charges</div>
                        </div>
                        <div className="sect1-point">
                            <div className="point-pic">
                                <img src={tick} alt="" />
                            </div>
                            <div className="point-text">Certificate of Good Standing</div>
                        </div>
                    </div>
                    <div className="sect1-btn">
                        <div className="sec1-btn1">Continue</div>
                    </div>
                </div>
                <div id='box2' className="third-box flex-sect2">
                    <div className="sect2-head">RAK ICC</div>
                    <div className="sect2-pay">$2,997 <span>One Time Payment</span></div>
                    <div className="sect2-text">
                        <div>Rak Icc New Company formation</div>
                        <div>includes</div>
                    </div>
                    <div className="sect2-points">
                        <div className="sect1-point">
                            <div className="point-pic">
                                <img src={tick} alt="" />
                            </div>
                            <div className="point-text">Attestation Charges</div>
                        </div>
                        <div className="sect1-point">
                            <div className="point-pic">
                                <img src={tick} alt="" />
                            </div>
                            <div className="point-text">Registered Agent</div>
                        </div>
                        <div className="sect1-point">
                            <div className="point-pic">
                                <img src={tick} alt="" />
                            </div>
                            <div className="point-text">Registered Office</div>
                        </div>
                        <div className="sect1-point">
                            <div className="point-pic">
                                <img src={tick} alt="" />
                            </div>
                            <div className="point-text">Varal Administrative</div>
                        </div>
                        <div className="sect1-point">
                            <div className="point-pic">
                                <img src={tick} alt="" />
                            </div>
                            <div className="point-text">Preparing Statutory File</div>
                        </div>
                        <div className="sect1-point">
                            <div className="point-pic">
                                <img src={tick} alt="" />
                            </div>
                            <div className="point-text">Liasing with Registration Authorities</div>
                        </div>
                        <div className="sect1-point">
                            <div className="point-pic">
                                <img src={tick} alt="" />
                            </div>
                            <div className="point-text">Due Diligence Appraisal</div>
                        </div>
                        <div className="sect1-point">
                            <div className="point-pic">
                                <img src={tick} alt="" />
                            </div>
                            <div className="point-text">Keeping The Register</div>
                        </div>
                        <div className="sect1-point">
                            <div className="point-pic">
                                <img src={tick} alt="" />
                            </div>
                            <div className="point-text">Seal Charges</div>
                        </div>
                        <div className="sect1-point">
                            <div className="point-pic">
                                <img src={tick} alt="" />
                            </div>
                            <div className="point-text">Certificate of Good Standing</div>
                        </div>
                    </div>
                    <div className="sect2-btn">
                        <div className="sec2-btn2">Continue</div>
                    </div>
                </div>
                <div id='box3' className="third-box flex-sect3">
                    <div className="sect3-head">SHARJAH MEDIA CITY</div>
                    <div className="sect3-pay">$4,124 <span>One Time Payment</span></div>
                    <div className="sect3-text">
                        <div>Sharjah Media City New</div>
                        <div>Company formation include</div>
                    </div>
                    <div className="sect3-points">
                        <div className="sect1-point">
                            <div className="point-pic">
                                <img src={tick} alt="" />
                            </div>
                            <div className="point-text">Attestation Charges</div>
                        </div>
                        <div className="sect1-point">
                            <div className="point-pic">
                                <img src={tick} alt="" />
                            </div>
                            <div className="point-text">Registered Agent</div>
                        </div>
                        <div className="sect1-point">
                            <div className="point-pic">
                                <img src={tick} alt="" />
                            </div>
                            <div className="point-text">Registered Office</div>
                        </div>
                        <div className="sect1-point">
                            <div className="point-pic">
                                <img src={tick} alt="" />
                            </div>
                            <div className="point-text">Varal Administrative</div>
                        </div>
                        <div className="sect1-point">
                            <div className="point-pic">
                                <img src={tick} alt="" />
                            </div>
                            <div className="point-text">Preparing Statutory File</div>
                        </div>
                        <div className="sect1-point">
                            <div className="point-pic">
                                <img src={tick} alt="" />
                            </div>
                            <div className="point-text">Liasing with Registration Authorities</div>
                        </div>
                        <div className="sect1-point">
                            <div className="point-pic">
                                <img src={tick} alt="" />
                            </div>
                            <div className="point-text">Due Diligence Appraisal</div>
                        </div>
                        <div className="sect1-point">
                            <div className="point-pic">
                                <img src={tick} alt="" />
                            </div>
                            <div className="point-text">Keeping The Register</div>
                        </div>
                        <div className="sect1-point">
                            <div className="point-pic">
                                <img src={tick} alt="" />
                            </div>
                            <div className="point-text">Seal Charges</div>
                        </div>
                        <div className="sect1-point">
                            <div className="point-pic">
                                <img src={tick} alt="" />
                            </div>
                            <div className="point-text">Certificate of Good Standing</div>
                        </div>
                    </div>
                    <div className="sect3-btn">
                        <div className="sec3-btn3">Continue</div>
                    </div>
                </div>
            </div>


            <div className="set" onClick={toggleData}>
                <Pagination totalPosts={totalPosts} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
            </div>
            <div className="third-img">
                <div className='third-img1'><img src={img1} alt="" /></div>
                <div className='third-img2'><img src={img2} alt="" /></div>
                <div className='third-img3'><img src={img3} alt="" /></div>
            </div>
        </div>
    )
}

export default Thirdcomp