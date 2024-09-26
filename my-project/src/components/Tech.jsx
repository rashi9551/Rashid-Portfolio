import React from "react";

import BallCanvas from "./canvas/Ball";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants/index";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap gap-10 justify-center">
      {technologies.map((technology) => (
        <div className="w-16 h-16" key={technology.name}>
          <BallCanvas icon={technology.icon} />
					<p className="grid-subtext *:text-center">{technology?.name?.split(' ').slice(0,1)}</p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
