
import Home from "./01 Home/Jsx/index";
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
      }
    ]
  }
])


function App() {

  return <RouterProvider router={routes} />
}

export default App
