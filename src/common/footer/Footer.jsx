import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <>
            <footer>
                <div className='container grid2'>
                    <div className='box'>
                        <h1>LTSPhone</h1>
                        <p>Quyền lợi và trãi nghiệm của khách hàng là ưu tiên hàng đầu với chúng tôi</p>
                        <div className='icon d_flex'>
                            <div className='img d_flex'>
                                <i class='fa-brands fa-google-play'></i>
                                <span>Google Play</span>
                            </div>
                            <div className='img d_flex'>
                                <i class='fa-brands fa-app-store-ios'></i>
                                <span>App Store</span>
                            </div>
                        </div>
                    </div>

                    <div className='box'>
                        <h2>Về Chúng Tôi</h2>
                        <ul>
                            <li>Nội Quy Cửa Hàng</li>
                            <li>Hệ Thống Của Hàng</li>
                            <li>Chất Lượng Phục Vụ</li>
                            <li>Điều Khoản & Điều Kiện</li>
                            <li>Chính Sách Bảo Mật</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h2>Chăm Sóc Khách Hàng</h2>
                        <ul>
                            <li>Trung Tâm Trợ Giúp </li>
                            <li>Mua Hàng Thế Nào </li>
                            <li>Kiểm Tra Đơn Hàng </li>
                            <li>Thanh Toán </li>
                            <li>Chính Sách Đổi Trả </li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h2>Liên Hệ Với Chúng Tôi</h2>
                        <ul>
                            <li>36/20 Bình Giã, phường 13, quận Tân Bình, TP.HCM </li>
                            <li>Email: minhthuan25112001@gmail.com</li>
                            <li>Số Điện Thoại: 0369787612 </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer