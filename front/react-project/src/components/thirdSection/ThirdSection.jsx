import React from 'react'
import './thirdSection.scss'

const ThirdSection = () => {
  return (
    <section>
      <div className="container">
        <div className="third">
            <div className='left-side'>
                <h1>Watch of Choice</h1>
                <p>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                <button>SHOW WATCHES</button>
            </div>
            <div className='right-side'>
                <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular6.png.webp" alt="" />
            </div>
        </div>
      </div>
    </section>
    
  )
}

export default ThirdSection
