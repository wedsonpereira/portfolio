import {useState,useRef} from "react";
import Skills from "./Skills";
import bingo from "./TempImg/wedson.jpg";
import Hobbies from "./Hobbies";
// import Blog from "./About";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faLinkedinIn,faInstagram,faYoutube} from '@fortawesome/free-brands-svg-icons';
import { faPhone,faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {gsap} from "gsap";
import Nav from "./nav";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);


export default function StarterTemp(props) {
  const [displaySideButton, setDisplaySideButton] = useState(false);
  const container=useRef();
  
  useGSAP(()=>{
  gsap.from(".gsapflowright",{x:-1000,duration:2,stagger:0.1,ease:"power3",opacity:0,rotateY:"210deg"})
  gsap.from(".gsapflowleft",{x:500,duration:2,stagger:0.1,ease:"power3",opacity:0})
  
  },{scope:container})


    const handleScroll = () => {
      const topElement = document.getElementById("topclass");
      if (topElement) {
        const heightOfTop = topElement.offsetHeight;
        const scrollPosition = window.scrollY;
        setDisplaySideButton(scrollPosition >= heightOfTop);
      }
    };
    window.addEventListener("scroll", handleScroll);
  
  return (
    <>
     <Nav/>
      <div ref={container} className="topClass" id="topclass" style={{ color: props.color, backgroundColor: props.mode }}>
        <div className="mainBox" style={{ backgroundColor: props.mode }}>
          <div className="box">
            <div className="division1 gsapflowright">
              <img src={bingo} alt="" />
            </div>
            <div className="division2">
              <div className="contentArea">
                <h1 className="greeting gsapflowleft">Hello</h1>
                <h4 className="SideContent gsapflowleft">A Bit About Me</h4>
                <p className="Info gsapflowleft">
                  I'm Wedson, A skilled Full Stack Developer Based In Mangalore,
                  Holds A BCA degree from Alva's College.Passionate
                  about crafting seamless user experiences through innovative
                  web design.
                </p>
              </div>
              <div className="buttonArea">
                <AnchorLink href="#Skills" className="anchor gsapflowleft"><button className="b">Skills</button></AnchorLink>
                <AnchorLink href="#Hobbies" className="anchor gsapflowleft"><button className="c">Hobby</button></AnchorLink>
                <AnchorLink href="#About" className="anchor gsapflowleft"><button className="z">Photos</button></AnchorLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Skills/>
      <Hobbies/>
      

      <div className="Cdivider" style={{ backgroundColor: props.mode }}>
        <div className="divider"></div>
      </div>

      <div className="cdtl" style={{ backgroundColor: props.mode }}>
        <div style={{ backgroundColor: props.mode, color: props.color }}>
          
          <h5 className="add-fw" style={{ backgroundColor: props.mode, color: props.color }}>
          <FontAwesomeIcon icon={faPhone} /> Phone
          </h5>
          <p
            style={{ backgroundColor: props.mode, color: props.color }}
            className="btmcont">
            +91 7483713076
          </p>
        </div>
        <div style={{ backgroundColor: props.mode, color: props.color }}>
          <h5 className="add-fw" style={{ backgroundColor: props.mode, color: props.color }}>
          <FontAwesomeIcon icon={faEnvelope} style={{color: "#000000",}} /> Email
          </h5>
          <a
            style={{ backgroundColor: props.mode, color: props.color }}
            className="btmcont"
            href="/">
            Pereirawedson1996@gmail.com
          </a>
        </div>
        <div style={{ backgroundColor: props.mode, color: props.color }}>
          <h5 className="add-fw" style={{ backgroundColor: props.mode, color: props.color }}>Follow Me</h5>
          <div className="d-flex gap-2">
              <a href="https://www.instagram.com/mr.wedson/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} size="xl" style={{color: "#000000",}} /></a>
              &nbsp;&nbsp;&nbsp;
              <a href="https://www.linkedin.com/in/wedson-ninel-pereira-822b8b240/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} size="xl" style={{color: "#000000",}} /></a>
              &nbsp;&nbsp;&nbsp;
              <a href="https://www.facebook.com/wedson.pereira.9400?mibextid=ZbWKwL " target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} size="xl" style={{color: "#000000",}} /></a>
              &nbsp;&nbsp;&nbsp;
              <a href="https://www.youtube.com/channel/UC8VJRdh3aAdk6hPLPSeb_YQ" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} size="xl" style={{color: "#000000",}} /></a>
          </div>
        </div>
        <div style={{ backgroundColor: props.mode, color: props.color }}>
          <p style={{ backgroundColor: props.mode, color: props.color }}>
            2030 By Wedson Ninel <br />
            Powered and secured by Google
          </p>
        </div>
      </div>

      <div className="sidebuttons" style={{ display: displaySideButton ? "flex" : "none" }} id="slide-in">
        <AnchorLink href="#Navigation"><button className="sbt d hovd">Home</button></AnchorLink>
        <AnchorLink href="#Skills"><button className="sbt b hovb">Skill</button></AnchorLink>
        <AnchorLink href="#Hobbies"><button className="sbt c hovc">Hobby</button></AnchorLink>
        <AnchorLink href="#About"><button className="sbt s hova">Photos</button></AnchorLink>
      </div>
    </>
  );
}
