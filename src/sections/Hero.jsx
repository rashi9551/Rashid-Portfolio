// import { Leva } from 'leva';
// import { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { useMediaQuery } from 'react-responsive';
// import { PerspectiveCamera } from '@react-three/drei';

// import Cube from '../components/Cube.jsx';
// import Rings from '../components/Ring.jsx';
// import ReactLogo from '../components/ReactLogo.jsx';
// import Button from '../components/Button.jsx';
// import Target from '../components/Target.jsx';
// import CanvasLoader from '../components/CanvasLoader.jsx';
// import HeroCamera from '../components/HeroCamera.jsx';
// import { calculateSizes } from '../constants/index.js';
// import { HackerRoom } from '../components/HackerRoom.jsx';

// const Hero = () => {
//   // Use media queries to determine screen size
//   const isSmall = useMediaQuery({ maxWidth: 440 });
//   const isMobile = useMediaQuery({ maxWidth: 768 });
//   const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

//   const sizes = calculateSizes(isSmall, isMobile, isTablet);

//   return (
//     <section className="min-h-screen w-full flex" id="home">
//       <div className="w-1/2 flex flex-col mt-20 c-space gap-3  justify-center items-center">
//         <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
//           Hi, I am Mubasir <span className="waving-hand">👋</span>
//         </p>
//         <p className="hero_tag text-gray_gradient">Building Products & Brands</p>
//         <a href="#about" className="w-fit">
//           <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
//         </a>
//         <div className="flex gap-3">
//           <div className="social-icon">
//             <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
//           </div>
//           <div className="social-icon">
//             <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
//           </div>
//           <div className="social-icon">
//             <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
//           </div>
//         </div>

//       </div>

//       <div className="w-1/2 flex justify-center items-center" >
//         <Canvas className="w-full h-full pb-40">
//           <Suspense fallback={<CanvasLoader />}>
//             {/* To hide controller */}
//             <Leva hidden />
//             <PerspectiveCamera makeDefault position={[0, 0, 30]} />

//             <HeroCamera isMobile={isMobile}>
//               <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
//             </HeroCamera>

//             <group>
//               {/* <Target position={sizes.targetPosition} />
//               <ReactLogo position={sizes.reactLogoPosition} /> */}
//               {/* <Rings position={sizes.ringPosition} /> */}
//               {/* <Cube position={sizes.cubePosition} /> */}
//             </group>

//             <ambientLight intensity={1} />
//             <directionalLight position={[10, 10, 10]} intensity={0.5} />
//           </Suspense>
//         </Canvas>
//       </div>

//       {/* <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
//         <a href="#about" className="w-fit">
//           <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
//         </a>
//       </div> */}
//     </section>
//   );
// };

// export default Hero;

import { Leva } from "leva";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { PerspectiveCamera } from "@react-three/drei";

import Cube from "../components/Cube.jsx";
import Rings from "../components/Ring.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Button from "../components/Button.jsx";
import Target from "../components/Target.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import { calculateSizes } from "../constants/index.js";
import { HackerRoom } from "../components/HackerRoom.jsx";
import { Spotlight } from "../components/ui/Spotlight.jsx";
import LampContainer from "../components/ui/LampContainer.jsx";
import { motion } from "framer-motion";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section
      className="min-h-screen w-full flex flex-col relative mt-10"
      id="home"
    >
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          {/* <p className="sm:text-3xl text-xl font-medium text-white text-center ">
            Hi, I am Mubasir <span className="waving-hand">👋</span>
          </p>
          <p className="hero_tag text-gray_gradient">Code Meets Creativity</p> */}
          <div className="w-full mx-auto flex flex-col sm:mt-8 c-space ">
            <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
              Hi, I am Mubasir <span className="waving-hand">👋</span>
            </p>
            <p className="hero_tag text-gray_gradient pb-10">
            Full Stack Developer. Tech Enthusiast.
            </p>
          </div>
          {/* <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
            a Full Stack Developer and tech enthusiast dedicated to building
            innovative, scalable, and user-friendly web applications. Whether
            it's crafting clean front-end interfaces or building strong back-end
            systems, I create digital solutions that leave a lasting impact.
          </p> */}
        </motion.h1>
      </LampContainer>
      {/* <LampContainer> */}
      {/* <div className="w-full mx-auto flex flex-col sm:mt-24 mt-10 c-space gap-3 ">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Mubasir <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Products & Brands
        </p>
      </div> */}
      {/* </LampContainer> */}

      <div className="w-full h-full absolute inset-0 ">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0.1, -Math.PI, 0]}
              />
            </HeroCamera>

            {/* <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Rings position={sizes.ringPosition} />
              <Cube position={sizes.cubePosition} />
            </group> */}

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
