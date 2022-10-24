import React from 'react'

const Catg = () => {
    const data = [
        {
            // cateImg: "./images/category/Samsung.svg.png",
            cateName: "Apple",
        },
        {
            // cateImg: "./images/category/samsung-logo-text-png-1.png",
            cateName: "Samsung",
        },
        {
            // cateImg: "./images/category/cat-1.png",
            cateName: "Oppo",
        },
        {
            // cateImg: "./images/category/cat-2.png",
            cateName: "Vivo",
        },
        {
            // cateImg: "./images/category/cat-1.png",
            cateName: "Redmi",
        },
        {
            // cateImg: "./images/category/cat-2.png",
            cateName: "Sony",
        },
    ]
    return (
        <>
            <div className="category">
                {/* <div className="chead d_flex">
    
                    <h1>Shops</h1>
                </div> */}
                <div className='brands'>
                    <h1>Thương Hiệu </h1>
                </div>

                {
                    data.map((value, index) => {
                        return (
                            <div className="box f_flex" key={index}>
                                <img src={value.cateImg} alt="" />
                                <span>{value.cateName}</span>
                            </div>
                        )
                    })
                }
                <div className="box box2"><button>Xem Tất Cả</button></div>
            </div>
        </>
    )
}

export default Catg