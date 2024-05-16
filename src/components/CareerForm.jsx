import axios from "axios";
import { useRef } from "react";

const CareerForm = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    try {
      const response = await axios.post("http://localhost:3000/sendEmail", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      });
      console.log(response);
      alert("Email sent successfully!");
      form.current.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again later.");
    }
  };

  return (
    <div className="container career-form-area py-5">
      <form ref={form}  onSubmit={sendEmail} className="my-form">
        <h2 className="fw-bold text-right text-light">Ready to Join?</h2>

        <div className="mb-3 ">
          <input
            type="text"
            className="my-form-input text-light"
            placeholder="Your Name*"
            name="name"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="my-form-input text-light"
            placeholder="Your Email*"
            name="email"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="tel"
            className="my-form-input text-light"
            placeholder="Phone No*"
            name="phone"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="my-form-input text-light"
            placeholder="Position Applied For*"
            name="position"
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            className="my-form-input text-light"
            placeholder="Enter your Message* "
            name="message"
            rows="5"
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="text-light">Upload CV:</label>
        </div>
        <div className="mb-3">
          <input
            type="file"
            className="my-form-input text-light"
            accept=".pdf, .doc, .docx"
            name="cv"
          />
        </div>
        <button type="submit" className="contact-btn btn-block">SEND MESSAGE</button>
      </form>
    </div>
  );
};

export default CareerForm;
