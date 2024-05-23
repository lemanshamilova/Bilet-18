import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './wishlist.scss'

const Wishlist = () => {
  const wishlist = useSelector((state) => state.products.wishlist)
  const dispatch = useDispatch()
  return (
    <section>
        <div className="container">
        <div className="wish-carts">
                {
                    wishlist.map((p)=>(
                        <div className='wish-cart'key={p._id}>
                            <img src={p.image}/>
                            <h3>{p.title}</h3>
                            <p>$ {p.price}</p>
                           
                        </div>
                    ))

                }
            </div>
        </div>
      
    </section>
  )
}

export default Wishlist
