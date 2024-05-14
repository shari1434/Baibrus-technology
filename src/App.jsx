
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Wrapper from './components/Wrapper';
import Home from './pages/Home';




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

])
function App(){
  return <RouterProvider router={router} />;
}

export default App
