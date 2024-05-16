
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import BackToTopButton from "./BackToTopButton";
import Header from "./Header";

const Wrapper = () => {
  return (
    <>
    <div style={{marginBottom:'150px'}}>
    <Header/>
    </div>
      <Outlet />
      <Footer />
      <BackToTopButton/>
    </>
  );
};

export default Wrapper;
