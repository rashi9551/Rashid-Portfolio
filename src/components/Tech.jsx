import React from "react";

import BallCanvas from "./canvas/Ball";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants/index";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap gap-6 justify-center">
      {technologies.map((tech) => (
        <div
          className="w-20 h-20 flex flex-col items-center justify-center"
          key={tech.name}
        >
          <BallCanvas icon={tech.icon} />
          <p className="grid-subtext2 text-center">
            {tech?.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
