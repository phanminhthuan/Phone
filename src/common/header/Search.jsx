import React from 'react'
import { Link } from 'react-router-dom'

const Search = ({ cartItem }) => {
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })
  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          {/* <div className='logo width'>
              <img src={logo} alt='' />
            </div> */}
          <div>
            <a href="/" className="logo"><span>LT</span>SPhone</a>
          </div>

          <div className='search-box f_flex'>
            <div className='icon-search'><i className='fa fa-search'></i></div>
            <input type='text' placeholder='Nhập sản phẩm cần tìm...' />
          </div>

          <div className='icon f_flex width'>
            <div className='user-icon'>
              <Link to='/my-account'>
                <i className='fa fa-user icon_circle'></i>
              </Link>
            </div>
            <div className='cart'>
              <Link to='/cart'>
                <div className='bag-icon'><i className='fa fa-shopping-bag icon-circle'></i>
                  <span>{cartItem.length === 0 ? "" : cartItem.length}</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search