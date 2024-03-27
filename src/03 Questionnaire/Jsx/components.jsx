import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinearProgress from "@mui/material/LinearProgress";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { useState,useEffect } from "react";
import { intervalToDuration } from "date-fns";
import {OptionsType} from "../../constants"


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

export function QandA({question,number,options}){
    return <motion.div id="QandAContainer">
                <Question question={question} number={number}/>
                <Options options={options} type={OptionsType.Checkbox}/>
                <ActionButtons/>
    </motion.div>
}

export function Question({question,number}){
    return <motion.div id="QuestionContainer">
                <motion.p id="number">{number}.</motion.p>
                <motion.p id="question">{question}</motion.p>
    </motion.div>
}

export function Options({options,type}){
    return <motion.div id="optionsContainer">
                    {(type === OptionsType.Radio) ? <RadioOptions options={options}/> : <CheckBoxOptions options={options} />}
    </motion.div>
}

function RadioOptions({options}){
    return <motion.div id="radioOptionsContainer">
                        <RadioGroup defaultValue="daniel" >
                    {
                        options.map(function(oneOption){
                            return   <AradioOption text={oneOption} />
                        })
                    }
                </RadioGroup>
            </motion.div>
}

function AradioOption({text}){
    return <motion.div id="radioOption" className="ASingleOPtion">
                <Radio value={text} /> <motion.p className="text">{text}</motion.p>
            </motion.div>
}

function CheckBoxOptions({options}){
    return <motion.div>
                    {
                        options.map(function(oneOption){
                            return   <AcheckBoxOPtion text={oneOption} />
                        })
                    }
            </motion.div>
}

function AcheckBoxOPtion({text}){
    return <motion.div className="ASingleOPtion" id="checkboxOption">
                <Checkbox value={text} /> <motion.p className="text">{text}</motion.p>
            </motion.div>
}

export function ActionButtons({done}){

    return <motion.div id="actionButtonsContainer">
        {!done && <PreviouseQuestionButton/>}
        <NextOrSubmitButton done={done} />
    </motion.div>
}

function PreviouseQuestionButton(){
    return <Button>Previous</Button>
}

function NextOrSubmitButton({done}){
    return <Button>{done?"Submit":"Next"}</Button>
}
