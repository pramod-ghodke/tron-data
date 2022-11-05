import React from 'react';

import { LinkContainer } from "react-router-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navmenu = () => {
  function setnav(){
    const mobilenav = document.querySelector(".mobile-nav");
    const toggle = document.querySelector(".mobile-nav-toggle");
  
    const visibility = mobilenav.getAttribute('data-visible' );
    if(visibility ==="false"){
        mobilenav.setAttribute("data-visible" , true);
        toggle.setAttribute("aria-expanded", true);
        document.querySelector("body").style.overflow='hidden';
    }
    else if(visibility === "true"){
        mobilenav.setAttribute("data-visible" , false);
        toggle.setAttribute("aria-expanded", false);
        document.querySelector("body").style.overflow='auto';
        
    }
  }
  return (

    <nav>
    <LinkContainer to="/"><a className="logo">Tronix<span>365</span></a></LinkContainer>
    <button className="mobile-nav-toggle" aria-controls='selectNav' aria-expanded="false"  onClick={setnav}>
        <span></span>
    </button>
 
    <ul className="lg-nav">
    <li><LinkContainer to="/"><a className="active">HOME</a></LinkContainer></li>
    <li><LinkContainer to="/blogs"><a >BLOGS</a></LinkContainer></li>
    <li><LinkContainer to="/about"><a >ABOUT US</a></LinkContainer></li>
    <li><LinkContainer to="/contact"><a >CONTACT US</a></LinkContainer></li>
    </ul>

    
    <ul id="selectNav" className="mobile-nav" data-visible="false">
    <LinkContainer to="/"><li className="active"><a onClick={setnav}>HOME</a></li></LinkContainer>
    <LinkContainer to="/blogs"><li><a onClick={setnav}>BLOGS</a></li></LinkContainer>
    <LinkContainer to="/about"><li><a onClick={setnav}>ABOUT</a></li></LinkContainer>
    <LinkContainer to="/contact"><li><a onClick={setnav}>CONTACT</a></li></LinkContainer>
    </ul>
</nav>
  )
}

export default Navmenu;