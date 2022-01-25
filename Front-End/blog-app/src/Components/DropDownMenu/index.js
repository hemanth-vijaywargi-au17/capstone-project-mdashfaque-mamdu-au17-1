// React
import React, { useRef, useEffect, useState } from "react";

const DropDownMenu = ({ children, menuButton }) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isActive]);

  return (
    <div className="relative">
      <div
        onClick={(e) => {
          setIsActive((prevState) => !prevState);
        }}
        className="flex"
      >
        {menuButton}
      </div>

      <div
        ref={dropdownRef}
        className="absolute shadow p-2 rounded right-0 bg-white mt-2"
        style={{ display: isActive ? "block" : "none" }}
      >
        {children}
      </div>
    </div>
  );
};

export default DropDownMenu;
