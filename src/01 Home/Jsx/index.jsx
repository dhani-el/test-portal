import { motion } from "framer-motion";
import { Navigation, Intro, Success, Benefit, Testimonial, Footer } from "./components";



export default function Home(){
    return <motion.div id="homeContainer">
                    {/* <Navigation/> */}
                    <Intro/>
                    <Success/>
                    <Benefit/>
                    <Testimonial/>
                    {/* <Footer/> */}
    </motion.div>
}