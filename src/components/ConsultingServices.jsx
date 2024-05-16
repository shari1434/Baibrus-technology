

const ConsultingServices = () => {
  return (
    <>
      <div className="container">
        <h6 className="s-heading text-center mt-5">BUSINESS BENEFITS</h6>
        <h1 className="text-center fw-bold">Consulting Services</h1>
      </div>
      <div className="container d-flex flex-column flex-sm-row justify-content-center align-items-center">

        <div className="row">
          <div className="col-5 mt-5">
            <div className="d-flex align-items-center">
              <h4>Software analysis and evaluation</h4>
              <i className="fa-regular fa-window-restore ms-5 consultingicon fs-1 mb-3"></i>
            </div>
            <div className="d-flex align-items-center">
              <h4>Technology strategy development</h4>
              <i className="fa-solid fa-microchip ps-1 ms-4 consultingicon fs-1 mb-3"></i>
            </div>
            <div className="d-flex align-items-center">
              <h4>Custom software development</h4>
              <i className="fa-brands fa-uncharted ps-3 ms-5 consultingicon fs-1 mb-3"></i>
            </div>
          </div>
          <div className="col-2 mb-5">
            <img src="src/images/consultingservices.jpg" style={{ width: "30vh" }} />
          </div>
          <div className="col-5 mt-5">
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-bars-progress ps-3 ms-3 consultingicon fs-1 mb-3"></i>
              <h4 className="ms-4">Vendor selection and management</h4>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-diagram-project ps-3 ms-3 consultingicon fs-1 mb-3" ></i>
              <h4 className="ms-4">Project management</h4>
            </div>
            <div className="d-flex align-items-center mb-5">
              <i className="fa-brands fa-intercom ps-3 ms-3 consultingicon fs-1 mb-3" ></i>
              <h4 className="ms-4">Integration</h4>
            </div>
          </div>
        </div>

     
      </div>
    </>
  )
}

export default ConsultingServices
