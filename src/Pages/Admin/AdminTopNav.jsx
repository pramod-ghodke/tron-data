import React from 'react';
import{Button} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from 'react-router-dom';


const AdminTopNav = () => {
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

      const navigate = useNavigate();
  
    const handleLogout=()=>{
          localStorage.clear();
          navigate("/admin");
    }
  return (
    <>
    <nav>
    <LinkContainer to="/"><a className="logo">Tronix<span>365</span></a></LinkContainer>
    <button className="mobile-nav-toggle" aria-controls='selectNav' aria-expanded="false"  onClick={setnav}>
        <span></span>
    </button>
 
    <ul className="lg-nav">
    {/* <li><LinkContainer to="/"><a className="active">HOME</a></LinkContainer></li>
    <li><LinkContainer to="/blogs"><a >PROJECTS</a></LinkContainer></li>
    <li><LinkContainer to="/about"><a >ABOUT US</a></LinkContainer></li>
    <li><LinkContainer to="/contact"><a >CONTACT US</a></LinkContainer></li> */}
    <Button onClick={handleLogout}>Logout</Button>
    </ul>

    
    <ul id="selectNav" className="mobile-nav" data-visible="false">
    <LinkContainer to="/"><li className="active"><a onClick={setnav}>HOME</a></li></LinkContainer>
    <LinkContainer to="/blogs"><li><a onClick={setnav}>PROJECTS</a></li></LinkContainer>
    <LinkContainer to="/about"><li><a onClick={setnav}>ABOUT</a></li></LinkContainer>
    <LinkContainer to="/contact"><li><a onClick={setnav}>CONTACT</a></li></LinkContainer>
    </ul>
</nav>
      
    </>
  )
}

export default AdminTopNav;