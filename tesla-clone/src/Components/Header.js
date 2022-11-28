import React from "react"
import './Header.css'
import Teslalogo from '../assets/teslaLogoSmall.svg'


const Header = () => {
    return (  
        <div className="header">
            <div className="header_logo">
              <img src={Teslalogo} alt=''/>
            </div>
        </div>
     );
}
 
export default Header;