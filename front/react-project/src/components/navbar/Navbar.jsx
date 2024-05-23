import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import "./navbar.scss";
import { useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const navigate = useNavigate();
  const basket = useSelector((state) => state.products.basket)


  return (
    <header>
      <div className="container">
        <div className="nav">
          <div className="image">
            <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png" />
          </div>
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/add"}>Add</NavLink>
            </li>
            <li>
              <NavLink>About</NavLink>
            </li>
            <li>
              <NavLink>Latest</NavLink>
            </li>
            <li>
              <NavLink>Blog</NavLink>
            </li>
            <li>
              <NavLink>Pages</NavLink>
            </li>
            <li>
              <NavLink>Contact</NavLink>
            </li>
           

          </ul>
          <GiHamburgerMenu className="menu"/>

          <div className="icons">
            <FaMagnifyingGlass className="search" />
            <FaRegHeart className="fav" onClick={()=>{
                navigate("/wishlist")
            }} />
            <MdOutlineShoppingCart
              className="basket"
              onClick={() => {
                navigate("/basket");
              }}
            />
            <span className="count">{basket.length}</span>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
