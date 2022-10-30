import React from 'react'
import FlashCard from './FlashCard'

const FlashDeals = ({ productItems, addToCart }) => {
    return (
        <>
            <section className='flash'>
                <div className='container'>
                    <div className='heading f_flex'>
                        <div className='bolt'><i className='fa fa-bolt'></i></div>
                        <h3>Siêu Sale </h3>
                    </div>  
                    <FlashCard productItems={productItems} addToCart={addToCart} />
                </div>
            </section>
        </>
    )
}

export default FlashDeals