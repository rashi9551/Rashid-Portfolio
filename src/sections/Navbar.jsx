import React, { useState } from "react";
import { navLinks } from "../constants";

const NavItems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className="nav-li">
          <a href={href} className="nav-li_a">
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 px-5 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-1 mx-auto c-space border-gray-700 mt-3 border rounded-lg">
          <a href="/" className="">
            <div className="w-8 h-8 rounded-full bg-neutral-400 font-bold bg-xl hover:bg-white transition-colors">
              <img src="./m-logo.png" alt="logo" className="w-8 h-8" />
            </div>
          </a>
          <button
            className="text-neutral-400 hover:text-white focus:outline-none md:hidden flex"
            aria-label="Toggle menu"
            onClick={() => setIsOpen((prvState) => !prvState)}
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
