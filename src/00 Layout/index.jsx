import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navigation, Footer } from "../01 Home/Jsx/components";




export default function Layout(){
    const {pathname} = useLocation();

    useEffect(function(){window.scrollTo(0, 0)},[pathname]);

    return   <div id="layoutWrapper">
                <div id="headerWrapper">
                    <Navigation/>
                </div>
                <div id="outletWrapper">
                    <Outlet/>
                </div>
                <div id="footerWrapper">
                    <Footer/>
                </div>
    </div>
}