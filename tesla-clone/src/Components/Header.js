import React from "react"
import './Header.css'
import Teslalogo from '../assets/teslaLogoSmall.svg'


const Header = () => {
    return (  
        <div className="header">
            <div className="header_logo">
              <img src={Teslalogo} alt='teslalogo'/>
            </div>
            
            <div className="header_center">
              <p>Model S</p>
              <p>Model 3</p>
              <p>Model X</p>
              <p>Model Y</p>
              <p>Solar Roof</p>
              <p>Solar Panel</p>
            </div>

            <div className="header_right">
              <p>Shop</p>
              <p>Account</p>
            </div>
        </div>
     );
}
 
export default Header;