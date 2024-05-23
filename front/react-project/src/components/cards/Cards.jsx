import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './cards.scss'
import { addToBasket, addToWishlist, getAllData } from '../../redux/slices/productSlice'
import { GiShoppingBag } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const Cards = () => {
    const products = useSelector((state) => state.products.products)
    const wishlist = useSelector((state) => state.products.wishlist)
    const dispatch = useDispatch()
const navigate=useNavigate()

    useEffect(() => {
     dispatch(getAllData())
    }, [])
    
  return (
    <section>
        <div className="container">
           <div className='margin'>
           <h1>Popular Items</h1>
            <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
           </div>
            <div className="carts">
                {
                    products.map((p)=>(
                        <div className='cart'key={p._id}>
                            <img src={p.image}/>
                            <h3>{p.title}</h3>
                            <p>$ {p.price}</p>
                            <div className='add'>
                            <GiShoppingBag onClick={(e)=>{
                                e.preventDefault(), e.stopPropagation()
                                dispatch(addToBasket(p))
                                alert("added to basket")

                            }}/>
                            {
                                wishlist.find((q)=>q._id ===p._id)?(
                                    <FaHeart style={{color:"red"}} onClick={(e)=>{
                                        e.preventDefault(), e.stopPropagation()
                                        dispatch(addToWishlist(p))
                                        alert("added to wishlist")
                                    }}/>

                                ):(
                                    <FaHeart onClick={(e)=>{
                                        e.preventDefault(), e.stopPropagation()
                                        dispatch(addToWishlist(p))
                                        alert("added to wishlist")
                                    }}/>
                                )
                            }



                            </div>
                            <div className='detail'>
                                <button onClick={()=>{
                                    navigate(`${p._id}`)
                                }}>Detail</button>
                            </div>
                        </div>
                    ))

                }
            </div>
        </div>
      
    </section>
  )
}

export default Cards
