import React from 'react'
import Ddata from './Ddata'
import Slider from "react-slick";

const Dcard = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
    }
    return (
        <>
            <Slider {...settings}>
                {Ddata.map((val, index) => {
                    return (
                        <>
                            <div className="product" key={index}>
                                <div className="box">
                                    <div className="img">
                                        <img src={val.cover} alt="" width='100%' />
                                    </div>
                                    <h4>{val.name}</h4>
                                    <span>{val.price} VNĐ</span>
                                </div>
                            </div>
                        </>
                    )
                })}
            </Slider>
        </>
    )
}

export default Dcard