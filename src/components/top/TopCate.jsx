import React from 'react'
import TopCart from './TopCart'
import "./Style.css"

const TopCate = () => {
    return (
        <>
            <section className='topCat'>
                <div className="container">
                    <div className="heading d_flex">
                        <div className="heading-left f_flex">
                            {/* <div className='all-border'><i className='fa fa-border-all'></i></div> */}
                            <div className='cat-icon'>
                                <img src='https://img.icons8.com/windows/32/fa314a/category.png' />
                            </div>
                            <h3>Bán chạy</h3>
                        </div>
                        <div className="heading-right">
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