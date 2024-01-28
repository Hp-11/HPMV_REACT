import React from "react";
import { Link } from "react-router-dom";
import "./css/nav.css";
import { SiOpenstreetmap } from "react-icons/si";
import { PiListNumbers } from "react-icons/pi";
import { LuLogIn } from "react-icons/lu";
import { FaUserLarge } from "react-icons/fa6";



const navigatorBar = () => {
  return (
    <div className="nav-list">
      <div className="left-nav-list left">
      <Link to="/mapView" className="list-item"> 
      {/* replace this link to user profile */}
      <FaUserLarge  className="mobile-only"/>
      </Link>
      </div>
      <div className="right-nav-List right">
        <Link to="/mapView" className="list-item">
        <SiOpenstreetmap />
          <p>Map View</p>
        </Link>
        <Link to="/listView" className="list-item">
        <PiListNumbers/>
          <p>List View</p>
        </Link>
        <Link to="/listView" className="list-item" id="nav-login-element">
        {/* replace this link to login page */}
        <LuLogIn/>
          <p>Log In</p>
        </Link>
      </div>
    </div>
  );
};

navigatorBar.propTypes = {};

export default navigatorBar;
