
import { motion } from "framer-motion";
import { CalibratorEngine, PopupWalkThrough } from "./components";
import webgazer from "../../webgazer"

import "../Styles/index.css"
import { useEffect, useState } from "react";



export default function Calibration(){
    const [initialLoad,setInitialLoad] = useState(false);
    const tempInstructions = ["Click on the each of the red dots 5 times while looking at the dot you are clicking after which they will change color then you can move to a different dot","Wait for the Calibration and further Instructions"]


    useEffect(function(){
        webgazer.setGazeListener(function(data, elapsedTime) {
          if (data == null) {
            return;
          }
          const xprediction = data.x; //these x coordinates are relative to the viewport
          const yprediction = data.y; //these y coordinates are relative to the viewport
          console.log(elapsedTime, data); //elapsed time is based on time since begin was called
        }).begin();

        // return webgazer.pause()
    
      })
    
      useEffect(function(){
        window.saveDataAcrossSessions = true;
        webgazer.showVideoPreview(false).showPredictionPoints(true);
      },[])

    return <motion.div id="calibrationPage">
                    <CalibratorEngine/>
                    {initialLoad && <motion.div id="popUpMainContainer">
                        <PopupWalkThrough instructions={tempInstructions}/>
                    </motion.div>}
                    <motion.div id="overlay"></motion.div>
            </motion.div>
}