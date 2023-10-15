import React, { useEffect, useState } from "react";
import "../header/header.css";

const MobileToggle = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");

    if (isActive) {
      body.classList.add("mobile-nav-active");
    } else {
      body.classList.remove("mobile-nav-active");
      setIsActive(false);
    }
  }, [isActive]);

  const handleChangeToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <i
      className={`bi mobile-nav-toggle d-xl-none ${
        isActive ? "bi-x" : "bi-list"
      }`}
      onClick={() => handleChangeToggle()}
    ></i>
  );
};

export default MobileToggle;
