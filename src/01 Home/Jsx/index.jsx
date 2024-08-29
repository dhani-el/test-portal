import { motion } from "framer-motion";
import { Intro, Success, Benefit, Testimonial,} from "./components";
import "../Styles/components/index.scss"


export default function Home(){
    return <motion.div id="homeContainer">
                    <Intro/>
                    <Success/>
                    <Benefit/>
                    <Testimonial/>
    </motion.div>
}