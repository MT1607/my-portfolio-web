import React, { useRef, useEffect } from "react";
import "../hero/hero.css";

import Typed from "typed.js";

const Hero = () => {
  const rel = useRef(null);

  useEffect(() => {
    const typed = new Typed(rel.current, {
      strings: ["Frontend Developer", "Web Developer"],
      startDelay: 300,
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 70,
      loop: true,
      showCursor: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <React.Fragment>
      {/* <!-- ======= Hero Section ======= --> */}
      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center "
      >
        <div className="hero_container" data-aos="fade-in">
          <h1>Nguyễn Gia Sơn</h1>
          <p>
            I&apos;m <span ref={rel}></span>
          </p>
        </div>
      </section>
      {/* <!-- End Hero --> */}
    </React.Fragment>
  );
};

export default Hero;
