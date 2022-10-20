import React from 'react'
import TopCart from './TopCart'
import "./Style.css"

const TopCate = () => {
  return (
    <>
        <section className='topCat backround'>
            <div className="container">
                <div className="heading d_flex">
                    <div className="heading-left row f_flex">
                        {/* <div className='all-border'><i className='fa fa-border-all'></i></div> */}
                        <div className='cat-icon'><img src='https://img.icons8.com/windows/32/fa314a/category.png' /></div>
                        <h2>Bán chạy</h2>
                    </div>
                    <div className="heading-right row">
                        <span>Xem tất cả</span>
                        <i className='fa fa-caret-right'></i>
                    </div>
                </div>
                <TopCart />
            </div>
        </section>
    </>
  )
}

export default TopCate