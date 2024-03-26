
import { motion } from "framer-motion";
import { TextField, Button, InputAdornment } from "@mui/material";
import { faFacebookF, faGoogle,faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faUser,faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthFormType } from "../../constants";


export function FormZ({shouldAnimate}){
    const animation = {
        initial:{
            left:0,
        },
        slideLeft:{
            left:"-45vw",
            transition:{
                duration:0.1,
                delay:0.4
            }
        },
        slideRight:{
            left:"0vw",
            transition:{
                duration:0.1,
                delay:0.4,
            }
        }
    }
    return <motion.div id="formZ" variants={animation} initial ="initial" animate = {shouldAnimate ? "slideLeft" : "slideRight"} >
                <FormTwo/>
                <FormOne/>
            </motion.div>
}

function FormType({type}){
    return <motion.div id="formTypeContainer" >
                {type == AuthFormType.LOGIN ? <IndicatorText text="Sign in to Testal"/> :<IndicatorText text="Create Account" /> }
            </motion.div>
}
function IndicatorText({text}){
    return <motion.p>{text}</motion.p>
}

function Socials(){
    return <motion.div id="socialsContainer">
                <motion.span>
                    <FontAwesomeIcon icon={faFacebookF} className="fontAwesomIcons" />
                </motion.span>
                <motion.span>
                    <FontAwesomeIcon icon={faGoogle} className="fontAwesomIcons"  />
                </motion.span>
                <motion.span>
                    <FontAwesomeIcon icon={faLinkedinIn} className="fontAwesomIcons"  />
                </motion.span>
            </motion.div>
}

function AltLoginText({type}){
    return <motion.div>
                {type === AuthFormType.SIGNUP ?<motion.p>Or use your email for registration</motion.p>
                                              :<motion.p>Or use your email account</motion.p>}
            </motion.div>
}


function FormOne(){
    return <motion.div className="singleForm" id="signUp" >
                <FormType type={AuthFormType.SIGNUP} />
                <Socials/>
                <AltLoginText type={AuthFormType.SIGNUP}/>
                <motion.div className="inputs">
                    <TextField InputProps ={{startAdornment:<InputAdornment sx={{width:"1.5rem",height:"1.5rem"}} position="start"  ><FontAwesomeIcon width={"1rem"} height={"1rem"} icon={faUser}/></InputAdornment>}}   variant="filled" placeholder="Name" />
                    <TextField InputProps ={{startAdornment:<InputAdornment sx={{width:"1.5rem",height:"1.5rem"}} position="start"  ><FontAwesomeIcon width={"1rem"} height={"1rem"} icon={faEnvelope}/></InputAdornment>}}   variant="filled" placeholder="Email" />
                    <TextField InputProps ={{startAdornment:<InputAdornment sx={{width:"1.5rem",height:"1.5rem"}} position="start"  ><FontAwesomeIcon width={"1rem"} height={"1rem"} icon={faLock}/></InputAdornment>}}   variant="filled" placeholder="Password"/>
                </motion.div>
                <Button variant="contained" >SIGN UP</Button>
            </motion.div>
}

function FormTwo(){
    return <motion.div className="singleForm" id="login">
                <FormType type={AuthFormType.LOGIN} />
                <Socials/>
                <AltLoginText type={AuthFormType.LOGIN}/>
                <motion.div className="inputs">
                    <TextField InputProps ={{startAdornment:<InputAdornment sx={{width:"1.5rem",height:"1.5rem"}} position="start"  ><FontAwesomeIcon width={"1rem"} height={"1rem"} icon={faUser}/></InputAdornment>}}   variant="filled" placeholder="Name" />
                    <TextField InputProps ={{startAdornment:<InputAdornment sx={{width:"1.5rem",height:"1.5rem"}} position="start"  ><FontAwesomeIcon width={"1rem"} height={"1rem"} icon={faLock}/></InputAdornment>}}   variant="filled" placeholder="Password"/>
                </motion.div>
                <motion.p id="forgot">Forgot your Password?</motion.p>
                <Button variant="contained" >SIGN IN</Button>
            </motion.div>
}

export function Feelings({animationTrigger , animationState}){
    const animation = {
        initial:{
            left:0,
        },
        slideLeft:{
            left:"-65vw",
            transition:{
                // duration:0.1,
                delay:0.4
            }
        },
        slideRight:{
            left:"0vw",
            transition:{
                // duration:0.1,
                delay:0.4,
            }
        }
    }
    return <motion.div id="feelingsContainer" variants={animation} initial = "initial" animate = {animationState ?"slideLeft" : "slideRight"} >
                <FeelingOne animationTrigger={animationTrigger}  />
                <FeelingTwo animationTrigger={animationTrigger} />
            </motion.div>
}

function FeelingOne({animationTrigger}){
    return <motion.div  id="aFeeling" >
                <MajorText text={"Welcome Back!"}/>
                <Subtext text={"To Continue Using Testal Please Enter Your Login Details"}/>
                <MyButton text={"Sign In"} animationTrigger={animationTrigger} />
            </motion.div>
}

function FeelingTwo({animationTrigger}){
    return <motion.div id="aFeeling" >
                <MajorText text={"Hello, Friend"}/>
                <Subtext text={"Enter The Details in The Form and Start Your Journey With Us"}/>
                <MyButton text={"Sign Up"} animationTrigger={animationTrigger} />
            </motion.div>
}
function MajorText({text}){
    return <motion.p id="majorText">{text}</motion.p>
}

function Subtext({text}){
    return <motion.p id="subText">{text}</motion.p>
}

function MyButton({text,animationTrigger}){
    return <motion.div  onClick={()=>animationTrigger()} id="customButton">{text}</motion.div>
}
