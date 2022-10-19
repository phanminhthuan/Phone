import React from 'react'

const head = () => {
  return (
    <>
        <section className='head'>
            <div className='container d_flex'>
                <div className='left row'>
                    <i className='fa fa-phone'></i>
                    <label>+84 369 787 612</label>
                    <i className='fa fa-envelope'></i>
                    <label>minhthuan25112001@gmail.com</label>
                </div>
                <div className='right row RText'>
                    <label>FAQ</label>
                    <label>Trợ Giúp</label>
                    {/* <span>🎏</span>
                    <label htmlFor="">VIE</label>
                    <span>🎏</span>
                    <label htmlFor="">VNĐ</label> */}
                </div>
            </div>
        </section>
    </>
  )
}

export default head