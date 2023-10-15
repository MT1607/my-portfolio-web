"use client";
import "./page.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "boxicons/css/boxicons.min.css";
import "glightbox/dist/css/glightbox.min.css";
import "swiper/css";
import AOS from "aos";
import "aos/dist/aos.css";

import React, { useEffect, useRef, useState } from "react";
import RootLayout from "./layout";

import Header from "./section/header/header";
import MobileToggle from "./section/header/mobile_toggle";
import Hero from "./section/hero/hero";
import About from "./section/about/about";
import Skills from "./section/skills/skills";
import Resume from "./section/resume/resume";
import Certifate from "./section/porfolio_certifate/certifate";
import Contact from "./section/contact/contact";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <RootLayout>
      <React.Fragment>
        {/* <!-- ======= Header Section ======= --> */}
        <MobileToggle />
        <Header />
        <Hero />

        <main id="main">
          <About />
          {/* <!-- ======= Facts Section ======= --> */}
          {/* <section id="facts" className={`facts`}>
            <div className="container">
              <div className="section_title">
                <h2>Facts</h2>
                <p>
                  Magnam dolores commodi suscipit. Necessitatibus eius
                  consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                  velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                  suscipit alias ea. Quia fugiat sit in iste officiis commodi
                  quidem hic quas.
                </p>
              </div>

              <div className="row no-gutters">
                <div
                  className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                  data-aos="fade-up"
                >
                  <div className="count_box">
                    <i className="bi bi-emoji-smile"></i>
                    <span>232</span>
                    <p>
                      <strong>Happy Clients</strong> consequuntur quae
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="count_box">
                    <i className="bi bi-journal-richtext"></i>
                    <span>521</span>
                    <p>
                      <strong>Projects</strong> adipisci atque cum quia aut
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="count_box">
                    <i className="bi bi-headset"></i>
                    <span>1453</span>
                    <p>
                      <strong>Hours Of Support</strong> aut commodi quaerat
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="count_box">
                    <i className="bi bi-people"></i>
                    <span>32</span>
                    <p>
                      <strong>Hard Workers</strong> rerum asperiores dolor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          {/* <!-- End Facts Section --> */}
          <Skills />
          <Resume />
          <Certifate />
          <Contact />
        </main>
        {/* <!-- End #main --> */}

        {/* <!-- ======= Footer ======= --> */}
        <footer id="footer">
          <div className="container">
            <div className="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>iPortfolio</span>
              </strong>
            </div>
            <div className="credits">
              {/* <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/ --> */}
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
        </footer>
        {/* <!-- End  Footer --> */}

        {/* <a
          href="#"
          className="back-to-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short"></i>
        </a> */}
      </React.Fragment>
    </RootLayout>
  );
}
