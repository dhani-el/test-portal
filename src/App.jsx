
import Home from "./01 Home/Jsx/index";
import Authentication from "./02 Authentication/Jsx";
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
  }
])


function App() {

  return <RouterProvider router={routes} />
}

export default App
