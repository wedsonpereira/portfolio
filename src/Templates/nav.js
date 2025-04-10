import React, { useState } from "react";
import logo from "./TempLogo/W.png";
import "./landing.css";
// import dl from "./TempLogo/moon-stars-fill.svg"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import "./nav.css"

export default function Nav(props) {
  const [menushow,setmenushow]=useState(false);
  const handleClick=(e)=>{
    e.preventDefault();
    setmenushow(!menushow);
  }

  const handleclose=()=>{
    setmenushow(!menushow);
  }
  
  return (
    <div
      className="nav"
      style={{ backgroundColor: props.bg, color: props.clr }}
      id="Navigation">
      <div className="profileInfo">
        <img className="logo" src={logo} alt="" style={{backgroundColor:"white"}} />
        <h2 className="nav_content h1" style={{ backgroundColor: props.bg }}>
          <Link to="/" className="text-decoration-none text-transparent-g1">
            Ninel{" "}
            <em className="title" style={{ backgroundColor: props.bg }}>
              FS.dev
            </em>
          </Link>
        </h2>
      </div>
      {/* <div className='dcontainer'>
          <button type="button" className='bg-light rounded-4 border-0' title='Enable Dark Mode'><img src={dl} alt="" /></button>
        </div> */}

      {/* Navigation buttons */}
      <div className="navigations" style={{ backgroundColor: props.bg }}>
        <div style={{ backgroundColor: props.bg }}>
          <Link
            to="/contact"
            style={{ backgroundColor: props.bg, color: props.clr }}>
            Contact
          </Link>
        </div>
        |
        <div style={{ backgroundColor: props.bg }}>
          <Link
            to="/Project"
            style={{ backgroundColor: props.bg, color: props.clr }}>
            Projects
          </Link>
        </div>
        |
        <div style={{ backgroundColor: props.bg }}>
          <Link
            to="/Resume"
            style={{ backgroundColor: props.bg, color: props.clr }}>
            Resume
          </Link>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="menubar">
        <button className="btn" onClick={handleClick}>
          <FontAwesomeIcon icon={faBars} size="2xl" />
        </button>
      </div>

      <div className={!menushow?"Link-room d-none":"Link-room d-flex"}>
        <ul className="links">
          <li>
            <Link
              to="/" onClick={handleclose}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Project" onClick={handleclose}>
              Projects
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/contact" onClick={handleclose}>
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/Resume" onClick={handleclose}>
              Resume
            </Link>
          </li>
        </ul>

        {/* button for closing */}

        <div className="closebtn btn btn-outline-danger" onClick={handleclose}>
        <FontAwesomeIcon icon={faArrowRightFromBracket} size="xl" />
        </div>
      </div>
    </div>
  );
}
