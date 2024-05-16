import Breadcrumb from "../components/Breadcrumb";
import { services_card } from "../data/services";
import NeedAConsultations from "../components/NeedAConsultations";
import CardSlider from "../components/CardSlider";



const Services = () => {
  return (
    <>
      <div>
        <Breadcrumb title={"Services"} subtitle={"Services"} />
      </div>
      <div className="container py-4 my-4">
        <h6 className="s-heading">OUR SERVICES</h6>
        <h1 className="fw-bold">
          We Offer a Wide <br /> Variety of IT Services
        </h1>
        <div className="row my-5">
          {services_card.map((item) => (
            <div key={item.id} className="container-fluid col-lg-4 col-md-6 col-sm-12 d-flex">
              <div className="text-center my-2 fa-3x mx-4 services-icon">
                <i className={`${item.icon} `} style={{width:'50px'}}></i>
              </div>
              <div className="container-fluid">
                <h5 className="fw-bold mb-3">{item.title}</h5>
                <p className="text-secondary">{item.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <NeedAConsultations />
      </div>
      
       
      <div className="text-center" style={{ backgroundImage:`url(${'https://engitech.s3.amazonaws.com/images/bg-maps-dots.jpg'})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", 
    }}>
       <div className="my-5">
        <h6 className=" s-heading mt-5">OUR CLIENTS</h6>
        {/* <div className="container d-flex "> */}
          <h2 className="fw-bold ">We are Trusted in <br />4+ Countries Worldwide</h2>
        {/* </div> */}
        <div>
      <CardSlider/>
      </div>
      </div>
      </div>
    </>
  );
};

export default Services;
