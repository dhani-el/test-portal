import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinearProgress from "@mui/material/LinearProgress";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { ArrowBack,ArrowForward } from "@mui/icons-material";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { useState,useEffect } from "react";
import { intervalToDuration } from "date-fns";
import {OptionsType} from "../../constants"


export function TestTitle({title}){
    return <motion.div id="testTitle">
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
                <motion.p id="timez"> {(timeLeft.hours || "00")} : {timeLeft.minutes || "00"} : {timeLeft.seconds || "00"} </motion.p>
                <FontAwesomeIcon icon={faClock} fontWeight={"100"} id="clockIcon" />
            </motion.div>
}

export function Progress({total,current}){
    const progValue = (current / total) * 100
    return <motion.div id="progressContainer">
                <LinearProgress variant="determinate" value={progValue} />
                <VsCount total={total} current={current}/>
            </motion.div>
}

export function Progress2({total,attempted}){
const totalRepArray = arraylize();
    function arraylize(){
        let res = []
        for(let i = 0 ; i < total; i++){
            res.push(i);
        }
        return res
    }

return <motion.div id="progressContainer2">
                {
                    totalRepArray.map((one,index)=>{
                        return <motion.div id="singleRep" className={(attempted <= index) || "attempted"}></motion.div>
                    })
                }
        </motion.div>
}

export function Previous(){
    return <motion.div id="leaveButtonContainer">
                <Button > <ArrowBack/>  Previous</Button>
    </motion.div>
}

export function VsCount({total,current}){
    return <motion.div id="vsCountContainer">
                <motion.p id="currentNumber"> Question {current}/</motion.p> <motion.p id="totalNumber">{total}</motion.p>
    </motion.div>
}

export function QandA({question,number,options,total}){
    return <motion.div id="QandAContainer">
                <Question question={question} number={number} total={total}/>
                <Options options={options} type={OptionsType.Radio}/>
                <ActionButtons/>
    </motion.div>
}

export function Question({question,number,total}){
    return <motion.div id="QuestionContainer">
                <motion.p id="number">Question {number} of {total}.</motion.p>
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
        <NextOrSubmitButton done={done} />
    </motion.div>
}

function PreviouseQuestionButton(){
    return <Button>Previous</Button>
}

function NextOrSubmitButton({done}){
    return <Button>{done?"Submit ":"Next Question"} <ArrowForward/></Button>
}
