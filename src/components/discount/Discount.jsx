import React from 'react'
import Dcard from './Dcard'
import './Style.css'

const Discount = () => {
    return (
        <>
            <section className='Discount background'>
                <div className="container">
                    <div className="heading d_flex">
                        <div className="heading-left f_flex">
                            <img src='https://img.icons8.com/windows/32/fa314a/gift.png' />
                            <h3>Khuyến Mãi</h3>
                        </div>
                        <div className="heading-right">
                            <span>Xem tất cả</span>
                            <i className='fa fa-caret-right'></i>
                        </div>
                    </div>
                    <Dcard/>
                </div>
            </section>
        </>
    )
}

export default Discount