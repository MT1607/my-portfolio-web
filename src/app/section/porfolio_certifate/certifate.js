import React from "react";
import "../porfolio_certifate/certifate.css";
const Certifate = () => {
  const certifates = [
    {
      name: "FreecodeCamp Javascript",
      src: "https://firebasestorage.googleapis.com/v0/b/my-web-406a9.appspot.com/o/freecodecamp.jpg?alt=media&token=d2c984cf-5361-4d88-bbdc-665edfee2135&_gl=1*r51ror*_ga*MTMyOTQzNTY0NS4xNjk3Mjk0MjU5*_ga_CW55HF8NVT*MTY5NzM4ODk3MC41LjEuMTY5NzM4OTAxOC4xMi4wLjA.",
    },
    {
      name: "Coursera Html, Css, Javascript",
      src: "https://firebasestorage.googleapis.com/v0/b/my-web-406a9.appspot.com/o/coursera.jpg?alt=media&token=2434f777-bbaa-404d-96ff-546983d069a7&_gl=1*1xg82jx*_ga*MTMyOTQzNTY0NS4xNjk3Mjk0MjU5*_ga_CW55HF8NVT*MTY5NzM4ODk3MC41LjEuMTY5NzM4OTAwMy4yNy4wLjA.",
    },
    {
      name: "Aptis",
      src: "https://firebasestorage.googleapis.com/v0/b/my-web-406a9.appspot.com/o/aptis.jpg?alt=media&token=f91c7395-24ce-40c1-b141-e6f80c0cba12&_gl=1*1mjzmjc*_ga*MTMyOTQzNTY0NS4xNjk3Mjk0MjU5*_ga_CW55HF8NVT*MTY5NzM4ODk3MC41LjEuMTY5NzM4ODk4My40Ny4wLjA.",
    },
  ];
  return (
    <React.Fragment>
      {/* <!-- ======= Portfolio Section ======= --> */}
      <section id="certifies" className="portfolio section_bg">
        <div className="container">
          <div className="section_title">
            <h2>Certifies</h2>
          </div>

          <div
            className="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {certifates.map((cert, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 portfolio-item filter-app"
              >
                <div className="portfolio-wrap">
                  <img src={cert.src} className="img-fluid" alt="certifate" />
                  <div className="portfolio-links">
                    <a
                      href={cert.src}
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title={cert.name}
                    >
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- End Portfolio Section --> */}
    </React.Fragment>
  );
};

export default Certifate;
