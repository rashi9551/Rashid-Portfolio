// import React, { useState } from "react";
import { navLinks } from "../constants";

// const NavItems = () => {
//   return (
//     <ul className="nav-ul">
//       {navLinks.map(({ id, href, name }) => (
//         <li key={id} className="nav-li">
//           <a href={href} className="nav-li_a">
//             {name}
//           </a>
//         </li>
//       ))}
//     </ul>
//   );
// };

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex justify-between items-center py-5 mx-auto c-space">
//           <a
//             href="/"
//             className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
//           >
//             Mubsir
//           </a>
//           <button
//             className="text-neutral-400 hover:text-white focus:outline-none md:hidden flex"
//             aria-label="Toggle menu"
//             onClick={() => setIsOpen((prvState) => !prvState)}
//           >
//             <img
//               src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
//               alt="toggle"
//               className="w-6 h-6"
//             />
//           </button>
//           <nav className="sm:flex hidden">
//             <NavItems />
//           </nav>
//         </div>
//       </div>
//       <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
//         <nav className="p-5">
//           <NavItems />
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


import { FaHome, FaInfoCircle, FaServicestack, FaPhone } from "react-icons/fa";

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <FaHome />,
  },
  {
    name: "About",
    link: "/about",
    icon: <FaInfoCircle />,
  },
  {
    name: "Services",
    link: "/services",
    icon: <FaServicestack />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <FaPhone />,
  },
];



import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "../utils/cn";

const Navbar = ({ className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();
       setVisible(true)
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-white/[0.5] rounded-full bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4 ",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            to={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-300 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
        <button className="border text-sm font-medium relative border-white/[0.2] text-white px-4 py-2 rounded-full">
          <span>Login</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default Navbar;
