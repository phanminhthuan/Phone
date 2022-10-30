import React from 'react'
import Cart from './Cart'
import './Style.css'

const NewArrivals = () => {
    return (
        <>
            <section className='newArrivals'>
                <div className="container">
                    <div className="heading d_flex">
                        <div className="heading-left f_flex">
                            <img width="40px" src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' />
                            <h3>Sản Phẩm Mới</h3>
                        </div>
                        <div className="heading-right">
                            <span>Xem tất cả</span>
                            <i className='fa fa-caret-right'></i>
                        </div>
                    </div>
                    <Cart />
                </div>
            </section>
        </>
    )
}

export default NewArrivals