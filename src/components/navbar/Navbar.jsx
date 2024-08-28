import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="topContainer">
      <div className="topItem">
        <span>Get free shipping on all orders above 1499!</span>
      </div>

      <div className="bottomItem">
        <div className="logo">
          <img
            className="logoImg"
            src="https://s3-alpha-sig.figma.com/img/e498/a071/3bed64d484a0bd2c7f0c1a8b92ea4647?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VdPj4BF9ppFD6haosu42S0Ax-UhJAIiXzxMc2olg7ZHnHehWhuWDIFjVkwnKm1XMXgYjp1tJ2aHm-xfEv5CdpZDZlHPZg00wpsAIjA8sNQz7cOGBYuNgpOTeg5j-FAIyf9Ram4vAl8SBbfzw6THBrc1CP-RaLkVdrqQgiC8Dg4-I8BGn6QGvRjJn5EodnKAiEcbZy5scqADx9VmdSpiL4eHZ25za9OgHaSnknUOnm0G1eBWaWSUvPn3fKI~JoFbaOSr7vUkmBSv3WDeaYV3Zzh3IqtoAkFNgRqs76OQRuF2CxbC9mOSm1zVXr-8OudbPMhSMkzj9jMFHPwCcfOtOEA__"
            alt="logo"
          />
        </div>
        <div className="center">
          <span>Shop All</span>
          <span>Clinical Studies</span>
          <span>About Us</span>
        </div>
        <div className="last">
          <CiShoppingCart />
          <CiSearch />
          <MdOutlineAdminPanelSettings />
        </div>
      </div>
    </div>
  );
}
