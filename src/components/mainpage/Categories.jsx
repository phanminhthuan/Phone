import React from 'react'

const Categories = () => {
    const data = [
        {
            cateImg: "./images/category/cat1.png",
            cateName: "Điện Thoại",
        },
        {
            cateImg: "./images/category/cat2.png",
            cateName: "Máy tính bảng",
        },
        {
            cateImg: "./images/category/cat3.png",
            cateName: "Laptop",
        },
        {
            cateImg: "./images/category/cat4.png",
            cateName: "Đồng Hồ",
        },
        {
            cateImg: "./images/category/cat11.png",
            cateName: "Đồ Chơi Công Nghệ",
        },
        {
            cateImg: "./images/category/cat6.png",
            cateName: "Âm Thanh",
        },
        {
            cateImg: "./images/category/cat7.png",
            cateName: "Phụ Kiện",
        },
        {
            cateImg: "./images/category/cat10.png",
            cateName: "Sim Thẻ",
        },
        {
            cateImg: "./images/category/cat9.png",
            cateName: "Sữa Chữa",
        },
        {
            cateImg: "./images/category/cat5.png",
            cateName: "Khuyến Mãi",
        },
        {
            cateImg: "./images/category/cat8.png",
            cateName: "Tin Tức",
        },
    ]
    return (
        <>
            <div className='category'>
                {data.map((value, index) => {
                    return (
                        <div className='box f_flex' key={index}>
                            <img src={value.cateImg} alt='' />
                            <span>{value.cateName}</span>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Categories