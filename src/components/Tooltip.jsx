import React from "react";

const Tooltip = ({ title, children }) => {
  return (
    <div className="relative group z-50">
      {children}
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-2 text-xs py-1 font-small text-[#D4D4D4] rounded-lg shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity">
        <p className="w-auto">{title}</p>
      </div>
    </div>
  );
};

export default Tooltip;
