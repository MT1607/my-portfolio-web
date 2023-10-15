import React from "react";
import "../about/about.css";

const About = () => {
  return (
    <React.Fragment>
      {/* <!-- ======= About Section ======= --> */}
      <section id="about" className="about">
        <div className="container">
          <div className="section_title">
            <h2>About</h2>
            <p>
              I am a front-end developer, who loves programming and software
              development, cheerful and friendly. In the future, I want to
              become a talented full-stack developer and become a CTO.
              Therefore, I hope to find a company where I can turn my hobby into
              a well-paid job, and gain experience for my future career.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/my-web-406a9.appspot.com/o/profile-img-ngs.jpg?alt=media&token=018bac89-b188-4499-bccc-bb18436af76e&_gl=1*1mwnich*_ga*MTMyOTQzNTY0NS4xNjk3Mjk0MjU5*_ga_CW55HF8NVT*MTY5NzM4Mjk0Ny40LjEuMTY5NzM4Mzc0My42MC4wLjA."
                className="img-fluid"
                alt=""
              />
            </div>
            <div
              className={`col-lg-8 pt-4 pt-lg-0 content `}
              data-aos="fade-left"
            >
              <h3>Front-End Developer</h3>
              <p className="fst-italic">
                -------------------------------------------------------------------------------------------------
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Birthday:</strong> <span>16 Jul 2000</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Website:</strong>{" "}
                      <span>https://mt1607.github.io/my-portfolio-web/</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Phone:</strong> <span>0585704001</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>City:</strong> <span>Ho Chi Minh</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Age:</strong> <span>23</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Degree:</strong> <span>Bachelor</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Email:</strong>{" "}
                      <span>nguyengiason7@gmail.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>English:</strong> <span>Aptis - B1</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                I want to find an environment where I can pursue my passion for
                programming and software development. I know that I still lack
                experience and have many shortcomings, but I am willing to learn
                from the senior devs to improve myself and bring benefits to
                myself and the company.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End About Section --> */}
    </React.Fragment>
  );
};

export default About;
