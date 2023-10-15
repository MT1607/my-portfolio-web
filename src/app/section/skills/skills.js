import React from "react";
import "../skills/skills.css";

const Skills = () => {
  const skills = [
    { skill_name: "HTML", skill_value: "100%" },
    { skill_name: "CSS", skill_value: "90%" },
    { skill_name: "Javascript / Typescript", skill_value: "90%" },
    { skill_name: "React", skill_value: "80%" },
    { skill_name: "Java", skill_value: "60%" },
    { skill_name: "C#", skill_value: "50%" },
    { skill_name: "Unity", skill_value: "50%" },
  ];

  return (
    <React.Fragment>
      {/* <!-- ======= Skills Section ======= --> */}
      <section id="skills" className="skills section_bg">
        <div className="container">
          <div className="section_title">
            <h2>Skills</h2>
            <p>
              Throughout my studies at university and my previous work
              experience, I have acquired these skills. I also have a solid
              grasp of Data Structures and Algorithms, Responsive Website, and
              Object-Oriented Programming.
            </p>
          </div>

          <div className="row skills-content">
            <div className="col-lg-12" data-aos="fade-up">
              {skills.map((skill) => (
                <div className="progress">
                  <span className="skill">
                    {skill.skill_name}{" "}
                    <i className="val">{skill.skill_value}</i>
                  </span>

                  <div className="progress_bar_wrap">
                    <div
                      className="progress_bar"
                      style={{ width: `${skill.skill_value}` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Skills Section --> */}
    </React.Fragment>
  );
};

export default Skills;
