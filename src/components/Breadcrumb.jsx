import { Link } from "react-router-dom";


const Breadcrumb = ({ title, subtitle }) => {
  return (
    <>
      <section
        className="d-flex align-items-center "
        style={{
          background: `linear-gradient(rgba(150, 0, 0, 0.8), rgba(0, 0, 0, 0.3)), url('baibrus-homebanner4.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
          height: "40vh",
          opacity: 40,
        }}
      >
        <div className="container text-light d-sm-flex align-items-center justify-content-between">
          <div><h1 className="fw-bold">{title}</h1></div>
          <div className="d-flex align-items-center">
            <p>
            <Link to='/' className="mx-3 text-decoration-none text-light">Home </Link>
            </p>
            <p className="active fw-bold">{subtitle}</p>
          </div>
        </div>
     
      </section>
    </>
  );
};

export default Breadcrumb;
