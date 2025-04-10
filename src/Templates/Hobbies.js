import React from "react";
import "./Hobbies.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic,faUtensils,faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';

const hobbies=[
  {
    title:"Keyboard player",
    description:"I personally engage in keyboard performance and compose music of notable quality",
    icon:<FontAwesomeIcon icon={faMusic} beatFade size="2xl" style={{color: "blue"}} />
  },
  {
    title:"Cooking",
    description:"I possess expertise in culinary arts and am proficient in preparing meals independently.",
    icon:<FontAwesomeIcon icon={faUtensils} beatFade size="2xl" style={{color: "blue"}} />
  },
  {
    title:"Traveller",
    description:"I am an avid traveler with a passion for exploring new destinations.",
    icon:<FontAwesomeIcon icon={faPlaneDeparture} beatFade size="2xl" style={{color: "blue"}} />
  },
]
export default function Hobbies() {
  return (
    <div className="container bg-white py-16 sm:py-24" id="Hobbies">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h1 className="font-semibold leading-7 sm:text-4xl fs-2 text-center">
          Explore My Hobbies Deparment
        </h1>
      </div>
      <div className="basket">
      {hobbies.map((data)=>(
        <div className="hobby-box flex-column">
        {data.icon}
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </div>
      ))}
    </div>
    </div>
  );
}
