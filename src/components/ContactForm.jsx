import { useRef } from "react";
// import emailjs from '@emailjs/browser';
const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    emailjs.sendForm(
      'service_ms86nin',
			'template_wtqs1vo',
			form.current,
			'e74oM1DQZG9mNhjbO',
			data
    );
    form.current.reset();
  };
  return (
    <>
      <div className="container">
        <div className="d-flex my-contact flex-column flex-sm-row align-items-center">
          <div className="container-fluid">
            <div>
              <h6 className="s-heading">CONTACT DETAILS</h6>
              <h2 className="ot-heading fw-bold ">Contact us</h2>
            </div>
            <p className="text-secondary">
              Give us a call or drop by anytime, we endeavor to answer all
              enquiries within 24 hours on business days. We will be happy to
              answer your questions.
            </p>
            <div className="my-3">
              <div className="d-flex py-4 contact-card me-5 px-5">
                <div className="mb-3">
                  <i
                    className="fa fa-globe"
                    style={{ color: "#27AAE1", fontSize: "35px" }}
                  ></i>
                </div>
                <div className="align-items-center mx-3">
                  <h5 className="">Our Address:</h5>
                  <p>6211, Summerfield Glade Ln Katy, TX 77494</p>
                </div>
              </div>

              <div className="d-flex py-4 contact-card me-5 px-5">
                <div className="mb-3">
                  <i
                    className="fa fa-envelope"
                    style={{ color: "#27AAE1", fontSize: "35px" }}
                  ></i>
                </div>
                <div className="align-items-center mx-3">
                  <h5>Our Mailbox:</h5>
                  <p>info@wavestechnology.net</p>
                </div>
              </div>

              <div className="d-flex  py-4 contact-card me-5 px-5">
                <div className="mb-3">
                  <i
                    className="fas fa-phone-volume"
                    style={{ color: "#27AAE1", fontSize: "35px" }}
                  ></i>
                </div>
                <div className="align-items-center mx-3">
                  <h5>Our Phone:</h5>
                  <p>+1-954-850-8839</p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <form ref={form} onSubmit={sendEmail} className="career-form-area py-5 my-5  ">
              <h1 className="text-light mx-5 fw-bold">Ready to Get Started?</h1>
              <p className="text-light mx-5 ">
                Your email address will not be published. Required fields are
                marked*
              </p>
              <div className="mb-3 mx-5 ">
                <input
                  type="text"
                  className="my-form-input text-light "
                  placeholder="Your Name*"
                  name="name"
                  required
                />
              </div>
              <div className="mb-3 mx-5">
                <input
                  type="email"
                  className="my-form-input text-light"
                  placeholder="Your Email*"
                  name="email"
                  required
                />
              </div>
              <div className="mb-3 mx-5">
                <textarea
                  className="my-form-input text-light"
                  placeholder="Enter your Message* "
                  rows="5"
                  name="message"
                ></textarea>
              </div>
              <button type="submit" className=" contact-btn mx-5">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </div>
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.579577460986!2d-95.80539612466879!3d29.70296647509734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8641219ca6a9e739%3A0x89aeb11486c559cd!2s6211%20Summerfield%20Glade%20Ln%2C%20Katy%2C%20TX%2077494%2C%20USA!5e0!3m2!1sen!2s!4v1705669056253!5m2!1sen!2s"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ width: "100%", height: "70vh" }}
        ></iframe>
      </div>
    </>
  );
};

export default ContactForm;
