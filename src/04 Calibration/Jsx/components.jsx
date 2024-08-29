
import { motion } from "framer-motion"
import { useState, useRef } from "react";
import { arrayLize } from "../../utils";
import { register} from 'swiper/element/bundle';
import { ArrowBack } from "@mui/icons-material";


register()



export function CalibratorEngine({caliStripAmt = 5 , pCaliAmt = 5}){
    return <motion.div id="calibratiorEngineContainer">
                {arrayLize(caliStripAmt).map(single =>  <CalibratorStrip nPCali={pCaliAmt} clickCount={5} />)}
            </motion.div>
}

function PointCalibrator({clickCount = 10}){
    const [hsptClickCount, sethsptClickCount] = useState(0);


    function handleClick(count,countSetter){
        if (count >= clickCount) {
            return
        }
        console.log(count);
        countSetter(init => init + 1);
    }
    return <motion.div className="pointCalibrator" id={hsptClickCount >= clickCount && "done"  }>
                    <motion.span className="hotSpot" onClick={()=>handleClick(hsptClickCount,sethsptClickCount)}></motion.span>
            </motion.div>
}

function CalibratorStrip({nPCali,clickCount}){
    return <motion.div className="aCalibratorStrip">
                {
                    arrayLize(nPCali).map(()=> <PointCalibrator clickCount={clickCount}/>)
                }
        </motion.div>
}

export function CalibratorTestEngine(){
    return <motion.div>
                    <motion.p>CALIBRATION TEST ENGINE</motion.p>
            </motion.div>
}

export function PopupWalkThrough({instructions = []}){
    const swiperElRef = useRef(null);
    // const swiper  = swiperElRef?.current?.swiper;
    return <>
                    <motion.button id="prevButton" onClick={()=>swiper.slidePrev()}>
                        <ArrowBack/> Previous
                    </motion.button>
                    <swiper-container ref={swiperElRef}  slides-per-view="1" id="instructions" >
                            {
                            instructions.map(function(instruction){
                                        return <swiper-slide>
                                                        <Instruction text={instruction}/>
                                                </swiper-slide>
                                })
                            }
                    </swiper-container>
                    <motion.button id="nextButton" onClick={()=> swiper?.isEnd ?"": swiper.slideNext()}>
                            {/* {swiper?.isEnd ?"Close":"Next"} */}
                    </motion.button>
            </>

}

function Instruction({text}){
    return <motion.div>
                <motion.p>{text}</motion.p>
            </motion.div>
}

function InstructionSlideControls(){
    return <motion.div id="slideControls">
                <motion.button>
                    Previous
                </motion.button>
                <motion.button>
                    Next
                </motion.button>
            </motion.div>
}

export function PopupWalkThrough2(){
    return <motion.div>

    </motion.div>
}

export function CalibrationDoneModal(){
    return <motion.div>

            </motion.div>
}

export function CalibrationErrorModal(){
    return <motion.div>

            </motion.div>
} 