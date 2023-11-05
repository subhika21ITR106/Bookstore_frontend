import React from 'react';
import './Footer.css'; 

import{Link} from 'react-router-dom';


function Footer() {
  return (
    <footer className="footer">
      <div className="left-column">
        <span>Online Book Store</span><br></br>
      <span>Copyright © 2023 Book Store</span>
    
      </div>
      
      <div className="right-column">
        <ul>
          <ul><Link to="/">Home</Link></ul><br></br>
          <ul><Link to="/About">| About Us</Link></ul><br></br>
          <ul><Link to="/cart"> | Cart</Link></ul><br></br>
          <ul><Link to="Contact">| Contact</Link></ul><br></br>
        </ul>
      </div>
      <div className="right1-column">
        <ul>
          <ul><Link to="/login">LogIN</Link></ul><br></br>
          <ul><Link to="/register">| SignUP</Link></ul><br></br>
        </ul>
      </div>
      <div className="right2-column">
        <ul>
          <ul><Link to="/About">Terms of Use | Privacy Policy</Link></ul><br></br>
          
        </ul>
      </div>
      <div className="right3-column">
        <ul>
          <ul>Reach Us | KEC,Erode | 502-589-9192 | instagram.com/thebookverse/</ul><br></br>
        </ul>
      </div>
      
      
    </footer>
  );
}

export default Footer;
