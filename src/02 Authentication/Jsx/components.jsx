
import { motion } from "framer-motion";
import { TextField, Button, InputAdornment } from "@mui/material";
import { faFacebookF, faGoogle,faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faUser,faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthFormType } from "../../constants";


export function FormZ(){
    return <motion.div id="formZ">
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

// function Formtional(){
//     return <motion.div>
//                 <FormOne/>
//                 <FormTwo/>
//             </motion.div>
// }

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

export function Feelings(){
    return <motion.div>
        
    </motion.div>
}

