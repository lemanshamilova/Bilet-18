import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const [product, setProduct] = useState([])
    const {productId}=useParams()

    const getProduct=async()=>{
        const res=await axios("http://localhost:5050/products/"+productId)
        setProduct(res.data)
    }
    useEffect(() => {
        getProduct()
    }, [])
    
  return (
    <section>
    <div className="container">
    <div className="carts">
            {
                product.map((p)=>(
                    <div className='cart'key={p._id}>
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

export default Detail
