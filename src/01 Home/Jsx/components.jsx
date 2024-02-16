
import { motion, useAnimationControls } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import "../Styles/components/index.css"
import { useState } from "react";



export function Navigation(){
    return <motion.div id="NavigationContainer">
                <Logo/>
                <NavigationSub/>
    </motion.div>
}

function Logo(){
    return <motion.div>
                <motion.p>
                    TESTAL
                </motion.p>
    </motion.div>
}

function NavigationSub(){
    const isLandscape = useMediaQuery({ query: '(orientation: landscape)' });
    const menuBodyController = useAnimationControls();
    return <motion.div id="navigationSub">
                {isLandscape ? <NavList/> : <MenuIcon bodyController={menuBodyController}/>}
                {!isLandscape && <MenuBody controller={menuBodyController} />}
    </motion.div>
}

// function MenuComponent(){
//     const menuBodyController = useAnimationControls();
//     return <motion.div id="menuComponentContainer">
//                 <MenuIcon bodyController={menuBodyController} />
//                 <MenuBody controller={menuBodyController} />
//     </motion.div>
// }

function MenuIcon({bodyController}){
    const [menuDeployed, setMenuDeployed] = useState(false)
    function handleClick(){
        setMenuDeployed(function(init){return !init})
        console.log(menuDeployed);
        bodyController.start(menuDeployed ?"initial":"slidIn");
    }
    return <motion.div id="menuIconContainer"  onClick={handleClick} >
                <motion.div id="one"></motion.div>
                <motion.div id="two"></motion.div>
                <motion.div id="three"></motion.div>
    </motion.div>
}

function MenuBody({controller}){
    const anima = {
        initial:{
            left:"100%",
        },
        slidIn:{
            left:"0%",
        }
    }
    return <motion.div id="menuBodyContainer" variants={anima} initial="initial" animate={controller} >
                <motion.p>Set Test</motion.p>
                <motion.p>Take Test</motion.p>
                <motion.p>Contact</motion.p>
                <button>Login</button>
                <button>Sign Up</button>
            </motion.div>
}

function NavList(){
    return <motion.div>
                <motion.p>Set Test</motion.p>
                <motion.p>Take Test</motion.p>
                <motion.p>Contact</motion.p>
                <button>Login</button>
                <button>Sign Up</button>
    </motion.div>
}