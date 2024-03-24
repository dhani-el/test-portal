
import Home from "./01 Home/Jsx/index";
import "./general style/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const routes = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  }
])


function App() {

  return <RouterProvider router={routes} />
}

export default App
