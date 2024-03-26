
import { motion } from "framer-motion";
import { TestTitle, TimeTracker, Leave, Progress} from "./components";
import "../Styles/index.css";
import {add} from "date-fns"
import { useState } from "react";


export default function Questionnaire(){
    const tempTotal = 12;
    const tempCurrent = 4;
    const timeForTest = 30;
    const [startTimer,setStartTimer] = useState(false);
    const [projectedTime, setProjectedTime] = useState(startTimer ? add(Date.now(),{minutes:timeForTest}):null);
   

    return <motion.div id="pageContainer">
                <motion.div id="titleNleaveContainer" >
                    <TestTitle title={"Customer Care Representative  StageII "} />
                    <Leave/>
                </motion.div>
                <Progress total={tempTotal} current={tempCurrent}/>
                <TimeTracker projectedTime={projectedTime}/>
                
            </motion.div>
}