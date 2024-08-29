
import Home from "./01 Home/Jsx/index";
import Authentication from "./02 Authentication/Jsx";
import Questionnaire from "./03 Questionnaire/Jsx";
import Calibration from "./04 Calibration/Jsx";
import Layout from "./00 Layout";
import "./general style/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const routes = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },{
        path:"/login",
        element:<Authentication/>
      },{
        path:"/signup",
        element:<Authentication/>
      }
    ]
  },{
    path:"/questions",
    element:<Questionnaire/>
  },{
    path:"/calibrate",
    element:<Calibration/>
  }
])


function App() {

  return <RouterProvider router={routes} />
}

export default App
