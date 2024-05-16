import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages";
import Wrapper from "./components/Wrapper";
import About from "./pages/about";
import Services from "./pages/services";
import Career from "./pages/career";
import Contact from "./pages/contact";
import AboutUs from "./components/AboutUs";
import { about_Us } from "./data";
import { dropdownservices } from "./data"
import ServicesDropdown from "./components/ServicesDropdown";


const ourMission = about_Us.find(item => item.id === 1);
const ourVision = about_Us.find(item => item.id === 2);
const ourPhilosophy = about_Us.find(item => item.id === 3);
const ourStrategy = about_Us.find(item => item.id === 4);

const softwareConsulting = dropdownservices.find(item => item.id === 1);
const softwareDevelopment = dropdownservices.find(item => item.id === 2);
const enterpriseApplications = dropdownservices.find(item => item.id === 3);
const technologyDevelopment = dropdownservices.find(item => item.id === 4);


const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/about",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <About />,
      },
    ],
  },
  {
    path: "/services",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <Services />,
      },
    ],
  },
  {
    path: "/career",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <Career />,
      },
    ]
  },
  {
    path: "/contact",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <Contact/>,
      },
    ],
  },
  {
    path: "/our-mission",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <AboutUs title={ourMission.title} desc={ourMission.desc} img={ourMission.img}/>,
      },
    ],
  },
  {
    path: "/our-vision",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element:  <AboutUs title={ourVision.title} desc={ourVision.desc} img={ourVision.img}/>,
      },
    ],
  },
  {
    path: "/our-philosophy",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element:  <AboutUs title={ourPhilosophy.title} desc={ourPhilosophy.desc} img={ourPhilosophy.img}/>,
      },
    ],
  },
  {
    path: "/our-strategy",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <AboutUs title={ourStrategy.title} desc={ourStrategy.desc} img={ourStrategy.img} />,
      },
    ],
  },
  {
    path: "/software-consulting",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <ServicesDropdown heading={softwareConsulting.heading}  title={softwareConsulting.title} desc={softwareConsulting.desc} para={softwareConsulting.para} img={softwareConsulting.img}/>,
      },
    ],
  },
  {
    path: "/software-development",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <ServicesDropdown heading={softwareDevelopment.heading}  title={softwareDevelopment.title} desc={softwareDevelopment.desc} para={softwareDevelopment.para} img={softwareDevelopment.img}  />,
      },
    ],
  },
  {
    path: "/enterprise-application",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <ServicesDropdown heading={enterpriseApplications.heading}  title={enterpriseApplications.title} desc={enterpriseApplications.desc} para={enterpriseApplications.para} img={enterpriseApplications.img} />,
      },
    ],
  },
  {
    path: "/technology-development",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <ServicesDropdown heading={technologyDevelopment.heading}  title={technologyDevelopment.title} desc={technologyDevelopment.desc} para={technologyDevelopment.para} img={technologyDevelopment.img} />,
      },
    ],
  },
  
 
  
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
