import React from "react";
import Logo from "../images/logo.svg";
import Facebook from "../images/icon-facebook.svg";
import Twitter from "../images/icon-twitter.svg";
import Pinterest from "../images/icon-pinterest.svg";
import Instagram from "../images/icon-instagram.svg";

const SocialIcons = [
  { icon: Facebook, alt: "Facebook Icon" },
  { icon: Twitter, alt: "Twitter Icon" },
  { icon: Pinterest, alt: "Pinterest Icon" },
  { icon: Instagram, alt: "Instagram Icon" },
];

export const Footer = () => {
  return (
    <footer>
      <div className="topLeft">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="Loopstudios" />
          </a>
        </div>
        <div className="footer_menu">
          <a
            href="/"
            className="footer_menu--link hoverLink"
            onClick={(e) => e.preventDefault()}
          >
            About
            <div className="line"></div>
          </a>
          <a
            href="/"
            className="footer_menu--link hoverLink"
            onClick={(e) => e.preventDefault()}
          >
            Careers
            <div className="line"></div>
          </a>
          <a
            href="/"
            className="footer_menu--link hoverLink"
            onClick={(e) => e.preventDefault()}
          >
            Events
            <div className="line"></div>
          </a>
          <a
            href="/"
            className="footer_menu--link hoverLink"
            onClick={(e) => e.preventDefault()}
          >
            Products
            <div className="line"></div>
          </a>
          <a
            href="/"
            className="footer_menu--link hoverLink"
            onClick={(e) => e.preventDefault()}
          >
            Support
            <div className="line"></div>
          </a>
        </div>
      </div>
      <div className="bottomRight">
        <div className="social_icons">
          {SocialIcons.map((icon, k) => (
            <a href="/" onClick={(e) => e.preventDefault()} key={k}>
              <img src={icon.icon} alt={icon.alt} />
            </a>
          ))}
        </div>
        <p>
          <span>&#169;&nbsp;</span>
          Loopstudios. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
