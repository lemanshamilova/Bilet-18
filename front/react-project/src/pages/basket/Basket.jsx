import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, remvBasket } from '../../redux/slices/productSlice'
import './basket.scss'

const Basket = () => {
    const basket = useSelector((state) => state.products.basket)
    const dispatch = useDispatch()
  return (
    <section>
        <div className="container">
        <div className="carts">
                {
                    basket.map((p)=>(
                        <div className='cart'key={p._id}>
                            <img src={p.image}/>
                            <h3>{p.title}</h3>
                            <p>$ {p.price}</p>
                            <div className='counter'>
                                <button onClick={()=>{
                                    dispatch(remvBasket(p))
                                }}>-</button>
                                <span>{p.count}</span>
                                <button onClick={()=>{
                                    dispatch(addToBasket(p))
                                }}>+</button>

                            </div>
                           
                        </div>
                    ))

                }
            </div>
        </div>
      
    </section>
  )
}

export default Basket
