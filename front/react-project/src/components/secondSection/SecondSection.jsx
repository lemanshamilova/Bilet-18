import React from 'react'
import './secondSection.scss'

const SecondSection = () => {
  return (
    <section>
        <div className="container">
        <h1 className='newArrivals'>New Arrivals</h1>
            <div className="secondBox">
                
                <div>
                    <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png" />
                    <h2>Thermo Ball Etip Gloves</h2>
                    <p>$ 45,743</p>
                </div>
                <div>
                    <img src="	https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product2.png" />
                    <h2>Thermo Ball Etip Gloves</h2>
                    <p>$ 45,743</p>
                </div>
                <div>
                    <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product3.png" />
                    <h2>Thermo Ball Etip Gloves</h2>
                    <p>$ 45,743</p>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default SecondSection
