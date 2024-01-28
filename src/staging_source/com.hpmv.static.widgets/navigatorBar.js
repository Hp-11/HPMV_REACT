import React from "react";
import { Link } from "react-router-dom";
import "./css/nav.css";
import { SiOpenstreetmap } from "react-icons/si";
import { PiListNumbers } from "react-icons/pi";
import { LuLogIn } from "react-icons/lu";


const navigatorBar = () => {
  return (
    <div className="nav-list">
      <div className="left-nav-list left"></div>
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
        <LuLogIn/>
          <p>Log In</p>
        </Link>
      </div>
    </div>
  );
};

navigatorBar.propTypes = {};

export default navigatorBar;
