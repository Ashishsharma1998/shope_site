import React from "react";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdOutlineLocalShipping } from "react-icons/md";
import { GiWorld } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="topFooter">
        <div className="topFirst">
          <RiMoneyDollarCircleFill />
          <span>30 days money back guarantee</span>
        </div>
        <div className="topSecond">
          <MdOutlineLocalShipping />
          <span>Free delivery over 1499!</span>
        </div>
        <div className="topThird">
          <GiWorld />
          <span>Shipping world wide</span>
        </div>
      </div>

      <div className="bottomFooter">
        <div className="bottomFirst">
          <img
            className="footerLogoImg"
            src="https://s3-alpha-sig.figma.com/img/e498/a071/3bed64d484a0bd2c7f0c1a8b92ea4647?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VdPj4BF9ppFD6haosu42S0Ax-UhJAIiXzxMc2olg7ZHnHehWhuWDIFjVkwnKm1XMXgYjp1tJ2aHm-xfEv5CdpZDZlHPZg00wpsAIjA8sNQz7cOGBYuNgpOTeg5j-FAIyf9Ram4vAl8SBbfzw6THBrc1CP-RaLkVdrqQgiC8Dg4-I8BGn6QGvRjJn5EodnKAiEcbZy5scqADx9VmdSpiL4eHZ25za9OgHaSnknUOnm0G1eBWaWSUvPn3fKI~JoFbaOSr7vUkmBSv3WDeaYV3Zzh3IqtoAkFNgRqs76OQRuF2CxbC9mOSm1zVXr-8OudbPMhSMkzj9jMFHPwCcfOtOEA__"
            alt="logo"
          />
          <p>
            The journey began when a group of health enthusiasts, scientists,
            engineers, and doctors came together with a shared goal — to cure
            the world.
          </p>
          <div className="icons">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
            <FaYoutube />
          </div>
        </div>
        <div className="bottomSecond">
          <div className="supplements">
            <h3>Supplements</h3>
            <span>Mulivitamin</span>
            <span>Gut Health</span>
            <span>Immunity</span>
            <span>Brain Health</span>
            <span>Energy Booster</span>
          </div>
          <div className="contact">
            <h3>Contact</h3>
            <span>Order & Shipping</span>
            <span>Returns & Refunds</span>
            <span>Contact Us</span>
            <span>FAQs</span>
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
          </div>
        </div>

        <div className="bottomThird">
          <h3>Subscribe to our newsletter</h3>
          <p>
            Get 10% Off and be the first person to know about our exclusive
            offers.
          </p>
          <div className="search">
            <input type="text" placeholder="Your Email Address.." />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
