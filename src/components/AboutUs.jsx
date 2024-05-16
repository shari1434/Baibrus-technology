
import "bootstrap/dist/css/bootstrap.min.css";
import Breadcrumb from "./Breadcrumb";

const AboutUs = (props) => {
  return (
    <>
      <div>
        <Breadcrumb title={props.title} subtitle={props.title} />
      </div>
      <div
        className=""
        style={{
          backgroundImage: `url(${"https://wavestechnology.net/wp-content/uploads/2020/01/bg-maps.jpg"})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container ">
          <div className="row align-items-center">
            <div className="col-md-6 mt-5">
              <div
                className="img trns mx-4 mb-5 d-flex flex-column align-items-center justify-content-center img-hover"
                style={{
                  backgroundImage: `url(${props.img})`,
                  backgroundSize: "cover",
                  height: "70vh",
                  width: "85%",
                }}
              >
                <h3 className="text-light text-center">{props.title}</h3>
              </div>
            </div>

            <div className="col-md-6">
              <p className="text-secondary mb-5  fs-5" style={{fontWeight:'600'}}>
                {props.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
