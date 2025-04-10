import React from "react";
import "chart.js/auto";
import "./Skills.css";
import py from "./TempLogo/py.png"
import java from "./TempLogo/java.png"
import php from "./TempLogo/php.png"
import rea from "./TempLogo/react.png";

import Spring from "./TempLogo/spring.svg"

const features = [
  {
    name: "JAVA & DSA",
    description:
      "Java, coupled with Data Structures and Algorithms (DSA), provides developers with a robust platform for building efficient and scalable software solutions.",
    icon:java,
  },
  {
    name: "PYTHON",
    description:
      "Python is a versatile programming language valued for its simplicity and versatility, widely used across diverse domains like web development, data science, and automation.",
    icon:py,
  },
  {
    name: "PHP",
    description:
      "PHP is a widely-used server-side scripting language known for its versatility and community support, powering numerous websites and web applications.",
    icon:php,
  },
  {
    name: "REACTJS",
    description:
      "React.js is a JavaScript library for building dynamic and interactive web interfaces with its declarative and component-based approach.",
    icon:rea,
  },
  {
    name: "Spring Boot",
    description:
      "Spring boot is a framework which is provided by java to enhance the developement of REST API and the web developement.",
    icon: Spring,
  },
  
];

export default function Skills() {
  return (
    <div className="bg-white py-26 sm:py-24" id="Skills">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h1 className="font-semibold fs-2 text-center leading-7 sm:text-4xl add-pt-2">
          Explore My Skills Deparment
        </h1>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl add-p-2em">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                  <img src={feature.icon} alt="" className="object-fit-cover"/>
                </div>
                {feature.name}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
