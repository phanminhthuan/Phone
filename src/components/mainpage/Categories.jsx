import React from 'react'

const Categories = () => {
    const data = [
        {
            cateImg: "./images/category/phone-1.png",
            cateName: "Điện Thoại",
        },
        {
            cateImg: "./images/category/tablet.png",
            cateName: "Máy tính bảng",
        },
        {
            cateImg: "./images/category/laptop.png",
            cateName: "Laptop",
        },
        {
            cateImg: "./images/category/watch.png",
            cateName: "Đồng Hồ",
        },
        {
            cateImg: "./images/category/smart_toy.png",
            cateName: "Đồ Chơi Công Nghệ",
        },
        {
            cateImg: "./images/category/sound.png",
            cateName: "Âm Thanh",
        },
        {
            cateImg: "./images/category/devices_other.png",
            cateName: "Phụ Kiện",
        },
        {
            cateImg: "./images/category/sim_card.png",
            cateName: "Sim Thẻ",
        },
        {
            cateImg: "./images/category/construction.png",
            cateName: "Sữa Chữa",
        },
        {
            cateImg: "./images/category/gift.png",
            cateName: "Khuyến Mãi",
        },
        {
            cateImg: "./images/category/news.png",
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