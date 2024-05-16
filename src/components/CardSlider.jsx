// CardSlider.jsx

import Slider from "react-slick";
import data from "../data/servicesCard";

const CardSlider = () => {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 968, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {data.map((item) => (
        <>
          <div className="slick-slide border my-5 py-4 mx-2 px-3" style={{boxShadow: '1px 1px 2px 10px #F8F8F8'}}>
            <div className="d-flex text-start">
              <div className="row">
                <div className="" key={item.id}>
                  <div className="d-flex align-items-center">
                  <div className="" > 
                  <img className="" src={item.Image} />
                  </div>
                  <div>
                  <h2>{item.title}</h2>
                  <h6>{item.subtitle}</h6>
                  </div>
                  </div>
                  <p className="para">{item.para}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </Slider>
  );
};

export default CardSlider;

