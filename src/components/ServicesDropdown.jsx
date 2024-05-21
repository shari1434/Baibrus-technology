import "bootstrap/dist/css/bootstrap.min.css";
import Breadcrumb from "./Breadcrumb";
import ConsultingServices from "./ConsultingServices";
import SoftwareDevelopment from "./SoftwareDevelopment";
import EnterpriseApplicationDevelopment from "./EnterpriseApplicationDevelopment";
import TechnologyDevelopment from "./TechnologyDevelopment";
import { useLocation } from "react-router-dom";

const ServicesDropdown = (props) => {
  const location = useLocation();
  const { route } = props;

  let componentToRender;

  if (location.pathname === "/software-consulting") {
    componentToRender = <ConsultingServices />;
  } else if (location.pathname === "/software-development") {
    componentToRender = <SoftwareDevelopment />;
  } else if (location.pathname === "/enterprise-application") {
    componentToRender = <EnterpriseApplicationDevelopment />;
  } else if (location.pathname === "/technology-development") {
    componentToRender = <TechnologyDevelopment />;
  } else {
    componentToRender = <ConsultingServices />;
  }
  console.log("Route", location);
  return (
    <>
      <div>
        <Breadcrumb title={props.heading} subtitle={props.heading} />
      </div>

      <div className="bg-img">
        <div
          className=""
          style={{
            backgroundImage: `url(${"/src/images/bg-image.png"})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 mt-5">
                <div
                  className="drop-down-image d-flex flex-column align-items-center justify-content-center"
                  style={{
                    backgroundImage: `url(${props.img})`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>

              <div className="col-md-6">
                <div className="text-end mb-3">
                  <h6 className="text-center s-heading mt-5">
                    WHAT DO WE OFFER
                  </h6>
                  <h2 className="text-center fw-bold">{props.title}</h2>
                </div>
                <p className="fs-8 mx-5">{props.desc}</p>
                <p className="text-secondary fw-bold mx-5">{props.para}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className=""
        style={{
          backgroundImage: `url(${"baibrus-homebanner2.jpg"})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        {componentToRender}
      </div>
    </>
  );
};

export default ServicesDropdown;
