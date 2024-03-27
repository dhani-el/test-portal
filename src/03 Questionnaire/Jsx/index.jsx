
import { motion } from "framer-motion";
import { TestTitle, TimeTracker, Previous, Progress,QandA, Progress2} from "./components";
import "../Styles/index.css";
import {add} from "date-fns"
import { useState } from "react";


export default function Questionnaire(){
    const tempTotal = 12;
    const tempCurrent = 4;
    const timeForTest = 30;
    const [startTimer,setStartTimer] = useState(false);
    const [projectedTime, setProjectedTime] = useState(startTimer ? add(Date.now(),{minutes:timeForTest}):null);
    const tempQuestion  = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias voluptatum nesciunt deleniti, perferendis, iusto laborum saepe quo, fuga dolore id consectetur? Cum assumend saepe non laboriosam nulla maiores eum ?"

    return <motion.div id="pageContainer">
                <motion.div id="titleNPrevContainer" >
                    <Previous/>
                    <TestTitle title={"Customer Care Representative  StageII "} />
                     <TimeTracker projectedTime={projectedTime}/>
                </motion.div>
                {/* <Progress total={tempTotal} current={tempCurrent}/> */}
                <Progress2 total={tempTotal} attempted={tempCurrent} />
                <QandA question={tempQuestion} number={tempCurrent} total = {tempTotal} options={["sung jin woo","sung jin woo","sung jin woo"]}/>
            </motion.div>
}