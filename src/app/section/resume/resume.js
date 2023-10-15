import React from "react";
import "../resume/resume.css";

const Resume = () => {
  return (
    <React.Fragment>
      {/* <!-- ======= Resume Section ======= --> */}
      <section id="resume" className="resume">
        <div className="container">
          <div className="section_title">
            <h2>Resume</h2>
          </div>

          <div className="row">
            <div className="col-lg-4" data-aos="fade-up">
              <h3 className="resume-title">Sumary</h3>
              <div className="resume-item pb-0">
                <h3>Nguyễn Gia Sơn</h3>
                <p>
                  <em>
                    I graduated with a degree in Information Technology from Hoa
                    Sen University with a good grade. I am currently living in
                    Ho Chi Minh City.
                  </em>
                </p>
                <ul>
                  <li>Hoc Mon District, Ho Chi Minh City</li>
                  <li>1585704001</li>
                  <li>nguyengiason7@gmail.com</li>
                </ul>
              </div>

              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h3>Bachelor of Information Technology</h3>
                <h5>2018 - 2023</h5>
                <p>
                  <em>Hoa Sen University, Ho Chi Minh City</em>
                </p>
                <p>
                  During my studies at school, when participating in solving
                  specialized group assignments, I often took on the role of a
                  leader, guiding members in the group to carry out tasks, or
                  was the most active member in the group. The GPA: 2.94
                </p>
              </div>
            </div>

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <h3 className="resume-title">Work Experience</h3>
              <div className="resume-item">
                <h3>NAMIQ CO,LTD</h3>
                <h4>FRONTEND DEVELOPER</h4>
                <h5>2022 - 2023</h5>
                <p>
                  <em>Tan Binh, Ho Chi Minh, Viet Nam </em>
                </p>
                <ul>
                  <li>
                    _ Primary responsibility for developing, debugging, and
                    maintaining issues related to the company’s front-end
                    products.
                  </li>
                  <li>_ Help senior in handling DevOps-related tasks.</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <h3 className="resume-title">Projects</h3>
              <div className="resume-item">
                <h3>SPEECH-IMPACT WEB</h3>
                <h4>FRONTEND DEVELOPER</h4>
                <h5>03/2023 - 06/2023</h5>

                <ul>
                  <li>
                    _ Responsible for developing web interface according to
                    existing wireframe using Typescripts language, on Reactjs
                    framework, Nx-workspace, and related libraries. Along with
                    team members, review, fix errors, and propose additional
                    functions for the website
                  </li>
                </ul>
              </div>
              <div className="resume-item">
                <h3>HOUSEE</h3>
                <h4>SOFTWARE DEVELOPER</h4>
                <h5>01/2023 - 02/2023</h5>

                <ul>
                  <li>
                    _ Develop mobile applications using C# language on the Unity
                    platform.
                  </li>
                  <li>
                    _ Build API to connect to the database through Hasura.
                  </li>
                </ul>
              </div>
              <div className="resume-item">
                <h3>NAMIQ-FACE</h3>
                <h4>FRONTEND DEVELOPER</h4>
                <h5>09/2022 - 12/2022</h5>
                <ul>
                  <li>
                    _ Maintain, fix errors, and refactor code according to
                    senior&prime;s guidance.
                  </li>
                  <li>
                    _ Propose a clean-code method, the unreasonable parts of the
                    interface.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Resume Section --> */}
    </React.Fragment>
  );
};

export default Resume;
