import React from 'react'
import "./style.css"

const Cart = ({ cartItem, addToCart, decreaseQty }) => {

    const totalPrice = cartItem.reduce((price,item) => price + item.qty * item.price, 0)
    return (
        <>
            <section className='cart-items'>
                <div className="container d_flex">
                    <div className="cart-details">
                        {cartItem.length === 0 && <h1 className='no-items product'>Không có sản phẩm nào trong giỏ hàng!</h1>}
                        {cartItem.map((item) => {
                            const productQty = item.price * item.qty
                            return (
                                <div className="cart-list product d_flex">
                                    <div className="img">
                                        <img src={item.cover} alt='' />
                                    </div>
                                    <div className="cart details">
                                        <h3>{item.name}</h3>
                                        <h4>
                                            {item.price} * {item.qty}
                                            <span>${productQty}</span>
                                        </h4>
                                    </div>
                                    <div className="cart-items-function">
                                        <div className="removeCart">
                                            <button>
                                                <i className="fa-regular fa-trash"></i>
                                            </button>
                                        </div>

                                        <div className="cartControl d_flex">
                                            <button className='incCart' onClick={() => addToCart(item)}>
                                                <i className='fa fa-plus'></i>
                                            </button>
                                        </div>
                                        <div className="cartControl d_flex">
                                            <button className='desCart' onClick={() => decreaseQty(item)}>
                                                <i className='fa fa-minus'></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        <div className="cart-total product">
                            <h2>Giỏ hàng</h2>
                            <div className="d_flex">
                                <h4>Tổng đơn hàng: </h4>
                                <h3>{totalPrice} VNĐ</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart