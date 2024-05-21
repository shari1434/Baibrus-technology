import { Link } from "react-router-dom"


const NeedAConsultations = () => {
  return (
  <>
  <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(100, 0, 0, 0.5)), url('baibrus homebanner5.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "70vh",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <h3
              className="text-light fw-bolder text-center"
              style={{
                marginTop: "11rem",
              }}
            >
              Drop us a line! We are here to answer your questions 24/7
            </h3>
            <h1
              className="text-light  text-center my-2 big-heading"
              style={{
                textShadow: "1px 1px 10px 1px black",
              }}
            >
              NEED A CONSULTATION?
            </h1>
            <div className="d-flex align-items-center justify-content-center mt-4">
            <Link to='/contact'>
            <button className="needaconsultant-btn my-7 w-30" >Contact Us</button>
            </Link>
            </div>
          </div>
        </div>
      </div>
  </>    
  )
}

export default NeedAConsultations
