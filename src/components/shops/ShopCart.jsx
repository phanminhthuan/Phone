import React, { useState } from 'react'


const ShopCart = ({ shopItems, addToCart }) => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    return (
        <>
            {shopItems.map((shopItems) => {

                return (
                    <div className="box shop-cart">
                        <div className="product mtop">
                            <div className="img">
                                <span className='discount'>Sale {shopItems.discount}%</span>
                                <img src={shopItems.cover} alt="" />
                                <div className="product-like">
                                    <label>0</label> <br />
                                    <div className='heart'><i className='fa-thin fa-heart' onClick={increment}></i></div>
                                </div>
                            </div>
                            <div className="product-details">
                                <h3>{shopItems.name}</h3>
                                <div className='rate'>
                                    <div className='star-rate'>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                    </div>
                                </div>
                                <div className="price">
                                    <h4>{shopItems.price}VNĐ</h4>
                                    <button onClick={() => addToCart(shopItems)}>
                                        <i className='fa fa-plus'></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </>
    )
}

export default ShopCart