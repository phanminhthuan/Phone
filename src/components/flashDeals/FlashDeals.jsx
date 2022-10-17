import React from 'react'
import FlashCard from './FlashCard'

const FlashDeals = ({ productItems }  ) => {
    return (
        <>
            <section className='flash'>
                <div className='container'>
                    <div className='heading f_flex'>
                        <div className='bolt'><i className='fa fa-bolt'></i></div>
                        <h1>Flash Sale </h1>
                    </div>  
                    <FlashCard productItems={productItems} />
                </div>
            </section>
        </>
    )
}

export default FlashDeals