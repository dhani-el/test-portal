
import { motion } from "framer-motion";
import { CalibratorEngine } from "./components";

import "../Styles/index.css"



export default function Calibration(){
    return <motion.div id="calibrationPage">
                    <CalibratorEngine/>
            </motion.div>
}