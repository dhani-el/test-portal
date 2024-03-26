
import { motion} from "framer-motion"
import { FormZ,Feelings } from "./components"
import "../Styles/index.css"
import { useState } from "react"




export default function Authentication(){
    const [animationState,setAnimationState] = useState(false);
    const animations = {
        envelope1:{
            initial:{
                top:0,
                right:"0vw",
                
            },
            slideLeft:{
                top:0,
                right:"50vw",
                transition:{
                    duration:1,
                }
            },
            slideRight:{
                top:0,
                right:"0vw",
                transition:{
                    duration:1,
                }
            }
        },
        envelope2:{
            initial:{
                top:0,
                left:"0vw",
            },
            slideLeft:{
                top:0,
                left:"0vw",
                transition:{
                    duration:1,
                }
            },
            slideRight:{
                top:0,
                left:"65vw",
                transition:{
                    duration:1,
                }
            }
        }

    }

    function animationToggle(){
        setAnimationState(init => !init)
    }

    return <div id="AuthPageContainer">
                <motion.div id="envelopeOne" className="envelope" variants={animations.envelope1} initial = "initial" animate = {animationState ? "slideLeft" : "slideRight"} >
                    <FormZ shouldAnimate={animationState}/>
                </motion.div>
                <motion.div id="envelopeTwo" className="envelope" variants={animations.envelope2} initial = "initial" animate = {animationState ? "slideRight" : "slideLeft"}>
                    <Feelings animationTrigger={animationToggle} animationState={animationState}/>
                </motion.div>
            </div>
}