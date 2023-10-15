import React, { useState } from "react";
import "../header/header.css";

const Header = () => {
  const [isFocus, setIsFocus] = useState(0);

  const socials = [
    {
      className_icon: "bx bxl-facebook",
      className: "facebook",
      href: "https://www.facebook.com/son.nguyengia.311",
    },
    {
      className_icon: "bx bxl-linkedin",
      className: "linkedin",
      href: "https://www.linkedin.com/in/sơn-nguyễn-gia-79b2a9283",
    },
    {
      className_icon: "bx bxl-github",
      className: "github",
      href: "https://github.com/MT1607",
    },
  ];

  const navbars = [
    {
      name: "Home",
      href: "#hero",
      className_icon: "bx bx-home",
    },
    {
      name: "About",
      href: "#about",
      className_icon: "bx bx-user",
    },
    {
      name: "Resume",
      href: "#resume",
      className_icon: "bx bx-file-blank",
    },
    {
      name: "Certifies",
      href: "#certifies",
      className_icon: "bx bx-book-content",
    },
    // {
    //   name: "Services",
    //   href: "#services",
    //   className_icon: "bx bx-server",
    // },
    // {
    //   name: "Contact",
    //   href: "#contact",
    //   className_icon: "bx bx-envelope",
    // },
  ];

  const handleFocus = (index) => {
    setIsFocus(index);
    const body = document.querySelector("body");
  };

  return (
    <React.Fragment>
      {/* <!-- ======= Header ======= --> */}
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/my-web-406a9.appspot.com/o/profile-img-ngs.jpg?alt=media&token=018bac89-b188-4499-bccc-bb18436af76e&_gl=1*wsgr6a*_ga*MTMyOTQzNTY0NS4xNjk3Mjk0MjU5*_ga_CW55HF8NVT*MTY5NzM1MDYxOS4zLjEuMTY5NzM1MTAxNi40LjAuMA.."
              alt="profile-img"
              className="img-fluid rounded-circle"
            />
            <h1 className="text-light">
              <a href="index.html">Nguyễn Gia Sơn</a>
            </h1>
            <div className="social_links mt-3 text-center">
              {socials.map((social, index) => (
                <a key={index} href={social.href} className={social.className}>
                  <i className={social.className_icon}></i>
                </a>
              ))}
            </div>
          </div>
          <nav id="navbar" className="nav_menu navbar">
            <ul>
              {navbars.map((nav, index) => (
                <li key={index}>
                  <a
                    href={nav.href}
                    className={`nav-link scrollto ${
                      isFocus === index ? "active" : ""
                    }`}
                    onClick={() => handleFocus(index)}
                  >
                    <i className={nav.className_icon}></i>{" "}
                    <span>{nav.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* <!-- .nav-menu --> */}
        </div>
      </header>

      {/* <!-- End Header --> */}
    </React.Fragment>
  );
};

export default Header;
