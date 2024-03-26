
import { motion } from "framer-motion"
import { FormZ,Feelings } from "./components"
import "../Styles/index.css"




export default function Authentication(){
    return <div id="AuthPageContainer">
                <motion.div id="envelopeOne" className="envelope">
                    <FormZ/>
                </motion.div>
                <motion.div id="envelopeTwo" className="envelope">
                    <Feelings/>
                </motion.div>
            </div>
}