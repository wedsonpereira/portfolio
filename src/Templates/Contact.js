import React, { useRef, useState } from "react";
import "./Contact.css";
import Nav from "./nav";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Contact() {
  const container=useRef();

  useGSAP(()=>{
    gsap.from(".gsapleftslide",{x:-1000,ease:"circ",duration:.7,stagger:0.1})
    gsap.from(".gsapopacity",{y:100,ease:"bounce.in",duration:.7,stagger:0.1,opacity:0,delay:1})
    gsap.from(".gsaprotatebtn",{rotateY:360,duration:1,delay:2,ease:"circ",repeat:0})
    gsap.from(".gsapscaleup",{scale:0,ease:"elastic",duration:.7,stagger:0.1,delay:1})
  },{scope:container});

  const [Phone]=useState("+91 748 371 3076");
  const [uEmail]=useState("Pereirawedson1996@gmail.com");


  const Copythetext = (q) => {
    try{
      const p=document.getElementById(q).value;
      navigator.clipboard.writeText(p);
      document.getElementById("Alert").style.display = "block";
      document.getElementById('Alert').classList.add("alert-success");
      setTimeout(() => {
        document.getElementById("Alert").style.display = "none";
      }, 2000);
    }catch(err){
      console.log(err);
      document.getElementById("Alert").innerHTML="Some Error Occured,Try Again After Some Time!";
      document.getElementById("Alert").style.backgroundColor="#ff5e5e";
      document.getElementById("Alert").style.color="white";
      document.getElementById("Alert").style.display = "block"
      setTimeout(() => {
        document.getElementById("Alert").style.display = "none";
      }, 2000);
    }
  };

  const [userdtl, setuserdtl] = useState({
    Name: "",
    LastName: "",
    Message: "",
    ph: "",
    Email: "",
  });

  const handlesubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.target);
  
      formData.append("access_key", "0108879f-25a4-4d75-b4cb-f4162a4c384e");
  
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
  
      if (res.success) {
        console.log("Success", res);
        alert('Your message has been sent!');
        setuserdtl({
          Name: "",
          LastName: "",
          Message: "",
          ph:"",
          Email:"",
        });
      } else {
        alert("Server Error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("An error occurred while submitting the form. Please try again later.");
    }
  };  

  return (
      <>
        <Nav/>
        <div className="areaAlign d-flex justify-content-center align-items-center" >
          <div className="alert alert-success m-0 p-2" id="Alert" style={{display:"none"}} role="alert">Copied</div>
        </div>
        <div className="Acontainer" ref={container}>
          <div className="Bcontainer">
            <div className="BsubCont1">
              <div className="group">
                <h1 className="fs-a1 gsapleftslide">Contact</h1>
                <h6 className="gsapleftslide">Get In Touch With Me</h6>
              </div>
              <div className="group disable">
                <h5 className="gsapleftslide">Phone</h5>
                <input id="Phonecopy" className="border-0 p-0 text-dark gsapleftslide" style={{width:"40%"}} type="text" value={Phone} disabled/>
                <button className="phonebtn btn btn-outline-dark gsapscaleup" onClick={() => Copythetext('Phonecopy')}>Copy</button>
              </div>
              <div className="group disable gsapflowright">
                <h5 className="gsapleftslide">Email</h5>
                <input id="PhoneEmail" className="p-0 text-dark border-0 disable gsapleftslide" type="text" value={uEmail} disabled/>
                <button className="phonebtn btn btn-outline-dark gsapscaleup" onClick={() => Copythetext('PhoneEmail')}>Copy</button>
              </div>
            </div>


            <form className="BsubCont2" action="" method="post" onSubmit={handlesubmit}>
              <div className="i-group">
                <div  className="inputs gsapopacity">
                  <label className="" htmlFor="">First Name*</label><br />
                  <input type="text" value={userdtl.Name} onChange={(e)=>setuserdtl(e.target.value)} name="FirstName" id="" className="itags" required />
                </div>
                <div className="inputs gsapopacity">
                  <label htmlFor="">Last Name</label><br />
                  <input type="text" name="LastName" id="" className="itags" value={userdtl.LastName} onChange={(e)=>setuserdtl(e.target.value)} required/><br />
                </div>
              </div>
              <div className="i-group">
                <div className="inputs gsapopacity">
                  <label htmlFor="">Email*</label><br />
                  <input type="email" name="Email" id="" className="itags" required value={userdtl.Email} onChange={(e)=>setuserdtl(e.target.value)} />
                </div>
                <div className="inputs gsapopacity">
                  <label htmlFor="">Contact No.</label><br />
                  <input type="number" name="Contact" id="" className="itags"  value={userdtl.ph} onChange={(e)=>setuserdtl(e.target.value)} />
                </div>
              </div>
              <div className="i-group gsapopacity">
                <div className="areatext">
                  <label htmlFor="">Message To Me*</label>
                  <textarea name="message" id="" cols="30" rows="6" required value={userdtl.Message} onChange={(e)=>setuserdtl(e.target.value)}></textarea>
                </div>
                <div className="submit">
                  <button className="subbtn gsaprotatebtn">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
  );
}