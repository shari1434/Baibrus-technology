

const TopBar = () => {
  return (
    <>
    <div className="row ">
      <div className="bg-dark text-light d-flex justify-content-between align-items-center px-4 pb-2  ">
      <div className="topbar-info">
        <p>
          <i className="fa fa-envelope"></i> info@baibrus.com
        </p>
        </div>
        <div className="mx-4 top-bar">
          <a href="#" className="text-light">
            <i className="fa fa-twitter mx-3"></i>
          </a>
          <a href="#" className="text-light">
            <i className="fa fa-facebook mx-3"></i>
          </a>
          <a href="#" className="text-light">
            <i className="fa fa-linkedin mx-3"></i>
          </a>
          <a href="#" className="text-light">
            <i className="fa fa-instagram mx-3"></i>
          </a>
        </div>
      </div>
      </div>
    </>
  );
};

export default TopBar;
