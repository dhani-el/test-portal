import { motion } from "framer-motion";
import { Navigation, Intro } from "./components";



export default function Home(){
    return <motion.div id="homeContainer">
                    <Navigation/>
                    <Intro/>
    </motion.div>
}