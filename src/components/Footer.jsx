import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-light p-4 py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <img
                src="logo2-baibrus.png"
                alt="Logo"
                style={{ width: "180px"}}
              />
              <p className="footer-p my-3">
                BaibrusTechnology was established in 2021 as a professional IT
                consultant with a vision to cater to private and public
                industries lacking informational technology.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <h5>Company</h5>
              <ul className="liststyle">
                <li>
                  <Link
                    to="/about"
                    className="footer-p-hover footer-p text-decoration-none"
                  >
                    <i className="fa fa-arrow-right me-2"></i>About Company
                  </Link>
                </li>
                <li>
                  <Link
                    to="/career"
                    className=" footer-p-hover footer-p    text-decoration-none"
                  >
                    <i className="fa fa-arrow-right me-2"> </i> Career
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact  "
                    className="footer-p-hover footer-p text-decoration-none"
                  >
                    <i className="fa fa-arrow-right me-2"> </i> Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 mb-4">
              <h5>Services</h5>
              <ul className="footer-p">
                <li className=" footer-p-hover">
                  <i className="fa fa-arrow-right me-2"> </i>Software
                  Consultancy
                </li>
                <li className=" footer-p-hover">
                  <i className="fa fa-arrow-right me-2"> </i>
                  Requirements Development
                </li>
                <li className=" footer-p-hover">
                  <i className="fa fa-arrow-right me-2"> </i>Product Development
                </li>
                <li className=" footer-p-hover">
                  <i className="fa fa-arrow-right me-2"> </i>Technology
                  Consultancy
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-4" />
          <div className="d-flex flex-column-reverse flex-md-row justify-content-between align-items-center">
            <div className="text-center text-md-start mb-3 mb-md-0">
              <p className="mb-0">
                &copy; 2024 BaibrusTechnology. All Rights Reserved
              </p>
            </div>
            <div className="d-flex footer-p footer-p-hover">
              <Link to=" " className=" footer-p text-decoration-none me-2">
                Privacy Policy
              </Link>

              <Link to=" " className=" footer-p text-decoration-none">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
