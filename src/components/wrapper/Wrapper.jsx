import React from 'react'
import "./style.css"

const Wrapper = () => {
    const data = [
        {
            cover: <i class="fa-solid fa-truck"></i>,
            title: "Vận Chuyển Toàn Quốc",
            decs: "Cung cấp giá cả sản phẩm cạnh tranh cho hơn 100 triệu khách hàng ở bất kỳ phạm vi nào trên cả nước.",
        },
        {
            cover: <i class='fa-solid fa-id-card'></i>,
            title: "Thanh Toán An Toàn",
            decs: "Tiện lợi và nhanh chóng với thanh toán bằng ví điện tử MoMo, VnPay,...",
        },
        {
            cover: <i class='fa-solid fa-shield'></i>,
            title: "Tự Tin Mua Sắm ",
            decs: "Cung cấp giá cả sản phẩm cạnh tranh cho hơn 100 triệu khách hàng ở bất kỳ phạm vi nào trên cả nước.",
        },
        {
            cover: <i class='fa-solid fa-headset'></i>,
            title: "Hỗ Trợ 24/7 ",
            decs: "Chúng tôi luôn luôn hỗ trợ khách hàng vì quyền lợi cá nhân.",
        },
    ]
    return (
        <>
            <section className='wrapper background'>
                <div className="container grid2">
                    {data.map((val,index) => {
                        return (
                            <>
                                <div className="product" key={index}>
                                    <div className="img icon-circle"> 
                                        <i>{val.cover}</i>
                                    </div>
                                    <h3>{val.title}</h3>
                                    <p>{val.decs}</p>
                                </div>
                            </>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Wrapper