import React from 'react'
import './footer.scss'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { IoHeartSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <section>
        <div className="container">
            <div className="footer">
                <div>
                <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png" />
                <p>Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed do eiusmod tem.</p>

                </div>

                <div>
                    <h4>Quick Links</h4>
                    <p>About</p>
                    <p>Offers & Discounts</p>
                    <p>Get Coupon</p>
                    <p>Contact Us</p>

                </div>
                <div>
                    <h4>New Products</h4>
                    <p>Woman Cloth</p>
                    <p>Fashion Accessories</p>
                    <p>Man Accessories</p>
                    <p>Rubber made Toys</p>

                </div>
                <div>
                    <h4>Support</h4>
                    <p>Frequently Asked Questions</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Report a Payment Issue</p>

                </div>
            </div>
            <div className='lastBox'>
                <p>Copyright ©2024 All rights reserved | This template is made with <IoHeartSharp style={{color:"red",position:"relative",top:"3px"}} />  by Colorlib</p>
                <div className='icons'>
                <FaTwitter />
                <FaFacebookF />
                <FaBehance />
                <FaGlobe />



                </div>

            </div>
        </div>
      
    </section>
  )
}

export default Footer
