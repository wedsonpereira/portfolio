import React, { useRef } from "react";
import { Button } from "@mui/material";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import Nav from "./nav";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP)

const PDF_FILE = "/wedsonresume.pdf";

export default function Resume() {

  const downloadFile = (url) => {
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));

        const filename = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", filename);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };

  const container=useRef();

  useGSAP(()=>{
    gsap.from(".gsapswipedown",{y:-500,ease:"power4-in",duration:1.2})
  })

  return (
    <>
    <Nav/>
      <div ref={container}
        className="container d-flex align-items-center justify-content-center"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "max-content",
          margin: "auto",
        
        }}>
        <div 
          className="gap-3 w-100 h-25 border-1 border-black rounded-2 p-3 d-flex justify-content-evenly flex-column align-items-center gsapswipedown"
          style={{ backgroundColor: "" }}>
          <h3 className="h2" style={{ color: "white",backgroundColor:"grey" }}>
            Download My Resume
          </h3>
          <Button onClick={() => downloadFile(PDF_FILE)} variant="outlined">
            {" "}
            <ArrowDownTrayIcon />{" "}
          </Button>
          {/* <p className="text-danger">The Button Has Been Disabled For Privacy Reasons. Kindly Contact Me , So that i can provide it.</p> */}
        </div>
      </div>
    </>
  );
}
