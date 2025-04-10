import React, { useRef } from "react";
// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/src/ScrollTrigger";
import "./project.css"
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Nav from "./nav";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const projects=[
  {
  "title": "Shoesbazar",
  "image": "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hvZXMlMjBzaG9wJTIwd2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
  "desciption": "Shoesbazar is a shoe shopping website that allows users to navigate to the brands web page  and purchase their desired products directly from there.",
  "DOD":"2023-JULY"
},
{
  "title": "Projectory",
  "image": "https://images.unsplash.com/photo-1549675584-91f19337af3d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxpYnJhcnl8ZW58MHx8MHx8fDI%3D",
  "desciption": "Projectory is a project managing website where students and teachers can play around with projects. This project was created as a college project. ",
  "DOD":"2023-AUGUST"
},

 {
  "title": "Newzapp",
  "image": "https://images.unsplash.com/photo-1579532536935-619928decd08?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG5ld3N8ZW58MHwwfDB8fHwy",
  "desciption": "newzapp , A news from variety of interest of common poeple can be shown in a more interactive way so that the user will not confuse between pages.",
  "DOD":"2024-FEBRUARY"
  
}
]

export default function Project() {
  const container=useRef();
  useGSAP(()=>{
    gsap.from(".gsapflowtop",{y:-1000,duration:1,ease:"power3",scale:1.3,opacity:0})
    gsap.from(".gsapflowbottom",{y:500,duration:1,ease:"power3",scale:1.3,opacity:0})
    gsap.from(".gsapflowbtn",{y:-800,duration:3,ease:"expo",opacity:0})
  },{scope:container})
  return (
    <>
    <Nav/>
    <div className='mycontainer intro-project' ref={container}>
		<div className='intro-body'>
			<h1 className='intro-header gsapflowtop'>
				Welcome To The Project Shore
			</h1>
			<p className='intro-desc gsapflowbottom'>Cant wait to See , Click The Below Button I will take you...</p>
		</div>
    <a className="p-3 rounded-5 gradient gsapflowbtn" href="#md-box">
    <FontAwesomeIcon className="rotate" icon={faArrowDown} bounce />
    </a>
	</div>
    {projects.map((project)=>(
    <div className="elements" key={project.image}>
      <div className="md-box" id="md-box">
        <div className="p-hd-1">
          <h1 style={{fontSize:"1.6em",fontWeight:"bold"}}>{project.title}</h1>
          <p className="pro-info">{project.desciption}</p><br />
          <p className="pro-info">Date of Development:{project.DOD}</p>
        </div>
        <div className="p-img-1">
          <img className="cover-img" id="cover-img" src={project.image} alt="" />
          <Link className="outline-btn" to="/">Click here</Link>
        </div>
      </div>
    </div>
    ))}
    </>
  );
}
