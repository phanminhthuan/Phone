import React, { useState } from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {

  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header'>
        <div className="container d_flex">
          <div className="categories d_flex">
            <span className='fa-solid fa-border-all'></span>
            {/* <h4>
              <div className='category'> Danh mục <i className='fa fa-chevron-down'></i></div>
            </h4> */}
          </div>

          <div className="navlink">
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              <li>
                <Link to='/'>Trang Chủ</Link>
              </li>
              <li>
                <Link to='/user'>Tài Khoản</Link>
              </li>
              <li>
                <Link to='/admin'>Admin</Link>
              </li>
              <li>
                <Link to='/track'>Kiểm tra đơn hàng</Link>
              </li>
              <li>
                <Link to='/contact'>Liên hệ</Link>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-bth'></i> :
                <i className='fa-solid fa-xmark'></i>
              }
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar