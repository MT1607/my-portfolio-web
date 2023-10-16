import React from "react";
import "../contact/contact.css";

const Contact = () => {
  return (
    <React.Fragment>
      {/* <!-- ======= Contact Section ======= --> */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section_title">
            <h2>Contact</h2>
          </div>

          <div className="row" data-aos="fade-in">
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>Hoc Mon District, Ho Chi Minh City</p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>nguyengiason7@gmail.com</p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>0585704001</p>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125380.16890958144!2d106.51126378683969!3d10.877694473232317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752a742dabfd33%3A0xd99a9f06eac63692!2zSMOzYyBNw7RuLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1697389669936!5m2!1svi!2s"
                  style={{ border: 0, width: "100%", height: "290px" }}
                  allowfullscreen=""
                ></iframe>
              </div>
            </div>

            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                Comming Soon
                {/* <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="10"
                    required
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Contact Section --> */}
    </React.Fragment>
  );
};

export default Contact;
