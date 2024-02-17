import { motion } from "framer-motion";
import { Navigation, Intro, Success } from "./components";



export default function Home(){
    return <motion.div id="homeContainer">
                    <Navigation/>
                    <Intro/>
                    <Success/>
    </motion.div>
}