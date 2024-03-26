import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinearProgress from "@mui/material/LinearProgress";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { useState,useEffect } from "react";
import { intervalToDuration } from "date-fns";


export function TestTitle({title}){
    return <motion.div>
                <motion.p>{title}</motion.p>
    </motion.div>
}

export function TimeTracker({projectedTime}){
    const [timeLeft, setTimeLeft] = useState(intervalToDuration({start:Date.now(),end:projectedTime}));

    useEffect(() => {
        const interval = setInterval(() => setTimeLeft(init => intervalToDuration({start:Date.now(),end:projectedTime})), 1000);
    
        return () => clearInterval(interval);
      }, []);
    
    return <motion.div id="timeTracker" >
                <FontAwesomeIcon icon={faClock} fontWeight={"100"} id="clockIcon" />
                <motion.p id="timez"> {(timeLeft.hours || "00")} : {timeLeft.minutes || "00"} : {timeLeft.seconds || "00"} </motion.p>
            </motion.div>
}

export function Progress({total,current}){
    const progValue = (current / total) * 100
    return <motion.div id="progressContainer">
                <LinearProgress variant="determinate" value={progValue} />
                <VsCount total={total} current={current}/>
            </motion.div>
}

export function Leave(){
    return <motion.div id="leaveButtonContainer">
                <Button variant="contained" >LEAVE</Button>
    </motion.div>
}

export function VsCount({total,current}){
    return <motion.div id="vsCountContainer">
                <motion.p id="currentNumber">{current}/</motion.p> <motion.p id="totalNumber">{total}</motion.p>
    </motion.div>
}

export function QandA(){
    return <motion.div>

    </motion.div>
}

export function Question(){
    return <motion.div>

    </motion.div>
}

export function Options(){
    return <motion.div>

    </motion.div>
}

export function ActionButtons(){
    return <motion.div>

    </motion.div>
}



// console.log(intervalToDuration({start:Date.now(),end:projectedTime}));