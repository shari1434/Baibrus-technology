
import Breadcrumb from "../components/Breadcrumb";
import { about_Us, projects } from "../data";

const About = () => {
  return (
    <>
      <Breadcrumb title={"About Us"} subtitle={"About Us"} />
      <div className="container my-5">
        <div className="row">
          <h6 className=" s-heading text-center my-2">WHO WE ARE</h6>
          <h1 className="text-center my-2  fw-bold">
            Your Partner for <br/> Software Innovation
          </h1>
          <p className="text-secondary">
            Baibrus Technology was established in 2021 as professional IT
            consultants with a vision to cater private and public industries
            lacking in informational technology. Over the years, we have
            successfully dealt with hundreds of sector and have partnered with
            them for their system’s technological innovation. We feel proud to
            recognize our solutions helping industries to overcome their
            management and product challenges.
          </p>
          <p >
            <b className="fst-italic">
              
                We can help to maintain and modernize your IT infrastructure and
                solve various infrastructure-specific issues a business may
                face.
              
            </b>
          </p>
        </div>
      </div>
      <div
        className="py-4"
        style={{ backgroundColor: "#f5f5f5", cursor: "pointer" }}
      >
        <div className="container">
          <div className="row">
            {about_Us.map((item) => (
              <div className="col-12 col-md-6" key={item.id}>
                <div
                  className="d-flex justify-content-center align-items-center text-light img-hover"
                  style={{
                    backgroundImage: `url(${item.img}`,
                    backgroundSize: "cover",
                    height: "60vh",
                  }}
                >
                  <h2>{item.title}</h2>
                </div>
                <p className="my-5">{item.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center text-light p-5"
    style={{ backgroundColor: "#211F3B", backgroundImage: "url(https://engitech.s3.amazonaws.com/images/bg-art-5.png)", backgroundRepeat: "no-repeat" }}
>
    <div className="mx-5">
        <img
            src="https://wavestechnology.net/wp-content/uploads/2020/02/image1-about.png"
            alt="img"
            className="img-fluid  w-100" // Added Bootstrap class img-fluid for responsive images
        />
    </div>
    <div className=" text-sm-left"> {/* Updated text alignment for small screens */}
        <h6  style={{
          color: "#8E88B8",
          fontSize:"12px",
          fontWeight: "800",
          

        }}>EXPERIENCE. EXECUTION. EXCELLENCE.</h6>
        <h1 className="fw-bold">What We Actually Do</h1>
        <ul className="d-flex list-unstyled my-4 display-3">
            <li className="mx-2 p-3 d-flex align-items-center justify-content-center icons my-2" style={{ border: '1px solid rgba(255, 255, 255, 0.3)' }}>
                <i className="icon-hover devicon-dot-net-plain" style={{ color: '#df352c' }}></i>
            </li>
            <li className="mx-2 p-3 d-flex align-items-center justify-content-center icons my-2" style={{ border: '1px solid rgba(255, 255, 255, 0.3)' }}>
                <i className="icon-hover devicon-react-original" style={{ color: '#df352c' }}></i>
            </li>
            <li className="mx-2 p-3 d-flex align-items-center justify-content-center icons my-2" style={{ border: '1px solid rgba(255, 255, 255, 0.3)' }}>
                <i className="icon-hover devicon-javascript-plain" style={{ color: '#df352c' }}></i>
            </li>
            <li className="mx-2 p-3 d-flex align-items-center justify-content-center icons my-2" style={{ border: '1px solid rgba(255, 255, 255, 0.3)' }}>
                <i className="icon-hover devicon-css3-plain" style={{ color: '#df352c' }}></i>
            </li>
        </ul>
        <h3>Analyze, Develop, Testing, Deployment</h3>
        <p>
            Evaluate past and current business data with the primary goal of
            improving decision-making processes within organizations.
        </p>
    </div>
</div>

      <div className="container d-flex flex-column justify-content-center align-items-center my-5">
        <h6 className="s-heading">OUR QUALITY</h6>
        <h1 className="fw-bold">How are we different?</h1>
        <p>We promise our product to be result-oriented and this is the reason we undertake the experience and knowledge of users in order to make every tool useful. We have specialized trainings and technology programs to ensure our customers have strong knowledge and hold over the core of the solutions. In this way we ensure that the solution is well integrated with the system as well as treated the right way for the desired implementation.</p>
      </div>
      <div className="active-client container d-flex justify-content-around align-items-center my-5 py-5 text-light" >
      {projects.map((item) => (
        <>
        <div className="text-center">
        <h1><b>{item.count}</b></h1>
        <h4>{item.title}</h4>
        </div>
        </>
         ))}
      
      </div>

    </>
  );
};

export default About;
