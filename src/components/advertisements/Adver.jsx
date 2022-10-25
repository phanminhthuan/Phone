import React from 'react'

const Adver = () => {
    const mystyle = {
        width: "30%", 
        height: "340px",
    }

    const mystyle1 = {
        width: "68%", 
        height: "340px",
    }
  return (
    <>
        <section className='adver background'>
            <div className='container d_flex'>
                <div className='img' style={mystyle}>
                    <img src="./images/advertisements/banner-1.png" width='100%' height='100%' />
                </div>
            </div>
            <div className="container">
                <div className='img' style={mystyle1}>
                    <img src="./images/advertisements/banner-2.png" width='100%' height='100%' />
                </div>
            </div>
        </section>
    </>
  )
}

export default Adver