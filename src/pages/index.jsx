
import { about_Us, home_banner, our_services, projects } from "../data";
import NeedAConsultations from "../components/NeedAConsultations";
import 'animate.css';
const Home = () => {
  return (
    <>
      {/* Home Banner Section */}
      <div className="container-fluid bg-img"
        style={{
          backgroundImage: `url('src/images/baibrus-homebanner.jpg')`,
          backgroundSize: "cover",
          
          
          
         
        }}
      >
        <div className="container pt-5">
          <div className="justify-content-center">
            <div>
            <h1
              className=" text-center mt-5 mb-4 big-heading"
              style={{
                textShadow: "1px 1px 10px 1px black",
              }}
            >
              ADVANCING TECHNOLOGY
            </h1>
            </div>
            <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center">
            {home_banner.map((item) => (
              <div
                key={item.id}
                className=" my-4 text-center"
              >
                <div className="cards mx-3 d-flex flex-column align-items-center">
                  <div className="card-icon text-light text-center fa-2x">
                 
                    <i className={`${item.icon} my-2 pe-2`}  >
                    
                    </i>
                  </div>
                  <h5
                    className="card-title text-light"
                    style={{ fontSize: "1rem" }}
                  >
                    {item.title}
                  </h5>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div
        className="container my-5  d-flex justify-content-center flex-column align-items-center"
        style={{
          backgroundImage: `url('http://wavestechnology.net/wp-content/uploads/2020/03/bg-art2-home4.png')`,
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <h6 className="s-heading">WE ARE BAIBRUSTECHNOLOGY</h6>
        <h1 className="fw-bold text-center ">We are Trusted in <br/>4+ Countries Worldwide</h1>
        <img
          src="https://wavestechnology.net/wp-content/uploads/2022/07/homepage-min.png"
          alt=""
          className="w-100 img-fluid"
          style={{ backgroundPosition: "center", backgroundSize: "cover" }}
        />
      </div>

      {/* Technology Index Section */}
      <div
        className="container-fluid py-5 text-light"
        style={{
          backgroundImage: `url('https://engitech.s3.amazonaws.com/images/bg-s2-home3.jpg')`,
          backgroundSize: "cover",
          // height: "90vh",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h6 className="mb-2" style={{color:" #8E88B8",}}>TECHNOLOGY INDEX</h6>
              <h1 className="fw-bold">Improve and Innovate with the Tech Trends</h1>
              <p>
                We hire and build your own remote dedicated development teams
                tailored to your specific needs. Get professional full-time
                developers who work exclusively for you as a part of your
                company. We handle all the practical aspects related to hiring
                and hosting your team at our premises, thus saving you half a
                cost and a lot of efforts.
              </p>
              <div className="row">
                {projects.map((item) => (
                  <div
                    key={item.id}
                    className=" col-6 col-md-6 col-lg-4 my-4  text-center"
                  >
                    <div >
                      <h2 className=" color-count fw-bold ">{item.count}</h2>
                    </div>
                    <h6>{item.title}</h6>
                  </div>
                ))}
              </div>
            </div>

            <div className="container-fluid col-md-6">
              <div className="row">
                {about_Us.map((item) => (
                  <div
                    key={item.id}
                    className="col-12 col-md-5 m-2 my-2 d-flex justify-content-center align-items-center img-hover"
                    style={{
                      backgroundImage: `url(${item.img})`,
                      backgroundSize: "cover",
                      height: "35vh",
                    }}
                  >
                    <h5 className="text-center">{item.title}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services Section */}
      <div className="container-fluid my-5">
        <h6 className="text-center s-heading">OUR SERVICE</h6>
        <h1 className="text-center fw-bold">We Offer a Wide <br /> Variety of IT Services</h1>
        <div className="row mx-2 d-flex justify-content-center align-items-center">
          {our_services.map((item) => (
            <div
              key={item.id}
              className="col-12 col-sm-12 col-md-8 col-lg-4 my-4 mx-2 border py-4 px-4 cards1"
              style={{ backgroundImage: `url(${item.bg_img})`, 
              backgroundSize:"cover",
              }}  >
                 
              <h5 className="fw-bold me-4 title fs-6">{item.title}</h5>
              <p className="col-md-10 text-secondary desc">{item.desc}</p>
              <ul className="list-unstyled ">
              <li className="list py-1 px-2 text-animate " style={{
                fontWeight: 600
              }}>{item.one}</li>
              <li className="list py-1 px-2 text-animate  " style={{
                fontWeight: 600
              }}>{item.two}</li>
              <li className="list py-1 px-2 text-animate " style={{
                fontWeight: 600
              }}>{item.three}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <NeedAConsultations />
    </>
  );
};

export default Home;
