import Breadcrumb from "../components/Breadcrumb";
import CareerForm from "../components/CareerForm";


const Career = () => {
  return (
    <div>
      <div>
        <Breadcrumb title={"Career"} subtitle={"Career"} />
      </div>
      <div className="text-center my-8 ">
        <h6 className="s-heading mt-5">JOIN THE TEAM</h6>
        <h1 className="fw-bold ">
        Let Us Recruit, Train and Reward You! </h1>
        </div>
        <div className="my-5" >
       
          <CareerForm/>
        </div>
        </div>
   
  )
}

export default Career;
