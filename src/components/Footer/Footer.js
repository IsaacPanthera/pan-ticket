import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <>
        <div className="footer-container">
          <p className="pantiket">Pantiket</p>
          <div className="footer-logo-container">
            <div className="phone-div">
              <img src="/media/phone-call.png" alt="phone"/>
              <p>+234 8111111111</p>

              <div className="mail-div">
                <img src="/media/Icon/mail 1.png" alt="mail" />
                <p>hello@pantiket.ng</p>
              </div>
            </div>
            <div className="footer-socials">
              <img src="/media/linkedin.png" alt="Linkedin" />
              <img src="/media/instagram.png" alt="Instagram" />
              <img src="/media/facebook.png" alt="facebook" />
              <img src="/media/whatsapp.png" alt="whatsapp" />
              <img src="/media/twitter.png" alt="twitter" />
            </div>
          </div>
          <div className="footer-down">
            <p className="footer-text">
              2019 © All rights reserved by BoyePanthera.com
            </p>
            <p className="footer-text">Design with ❤️ by BlaqMac Design</p>
          </div>
        </div>
      </>
    </footer>
  );
}

export default Footer;
