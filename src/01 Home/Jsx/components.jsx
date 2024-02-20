import { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Hero from "../../assets/Hero.png"
import "../Styles/components/index.css"
import { Button } from "@mui/material";



export function Navigation(){
    return <motion.div id="NavigationContainer">
                <Logo/>
                <NavigationSub/>
    </motion.div>
}

function Logo(){
    return <motion.div id="logoContainer">
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
                <Button variant="contained">Login</Button>
                <Button variant="outlined">Sign Up</Button>
            </motion.div>
}

function NavList(){
    return <motion.div id="navList">
                <motion.p>Set Test</motion.p>
                <motion.p>Take Test</motion.p>
                <motion.p>Contact</motion.p>
                <Button variant="contained">Login</Button>
                <Button variant="outlined">Sign Up</Button>
    </motion.div>
}


export function Intro(){
    return <motion.div id="introContainer">
              <Texts/>
              <HeroImage/>
            </motion.div>
}

function Texts(){
    return <motion.div id="textContainer">
                <motion.p id="header" >
                    The Most Secure Way For Remote Tests
                </motion.p>
                <motion.p id="bodyText">
                    Set Remote Tests and be rest assured that your test are secured with minimal effort and realtime feedback on the actions of your test takers. Rest assured your remote test and examinations are now more secured than those done in person. 
                </motion.p>
                <Button variant="contained">Sign Up Now</Button>
            </motion.div>
}

function HeroImage(){
    return <motion.div id="heroContainer">
                <motion.img src={Hero}  alt="Hero Image"/>
            </motion.div>
}


export function Success(){
    return <motion.div id="successContainer">
                <motion.p id="heading">
                    OUR SUCCESS
                </motion.p>
                <motion.p id="bodyText">
                    Our Success is rooted in Dedication, team work and a relentless pursiut of excellence. Together, we acheive milestones that define our journey and shape our future
                </motion.p>
                <Metrics/>
            </motion.div>
}

function Metrics(){
    return <motion.div id="metricContainer">
                <motion.div className="aMetric">
                    <motion.p id="heading">110+</motion.p>
                    <motion.p>Instutions</motion.p>
                </motion.div>
                <motion.div className="aMetric">
                    <motion.p id="heading">25+</motion.p>
                    <motion.p>Countries</motion.p>
                </motion.div>
                <motion.div className="aMetric">
                    <motion.p id="heading">175+ </motion.p>
                    <motion.p>Instructors</motion.p>
                </motion.div>

            </motion.div>
}


export function Benefit(){
    return <motion.div id="benefitContainer">
                <motion.div id="imageContainer">
                    <motion.img src={Hero}  />
                </motion.div>
                <ListOBenefit/>
    </motion.div>
}

function ListOBenefit(){
    const bodycontents = ["With testal you get can realtime updates on what actions your test takers are performing resulting in better overseeing of your test takers","Testal gives you the opportunity to accurately review the actions of your test takers through out the test or examination","To help with making decisons on the integrity of a test taker during an exam or test we at testal have provided an avenue to send a summary on of the actions taken by the test taker to assist with your decision"]
    return <motion.div id="listOBenefitContainer">
                <motion.p id="headingP">Benefit of this platform</motion.p>
                <ABenefit heading="RealTime Updates" bodyText={bodycontents[0]}  />
                <ABenefit heading="Action Timestamps"  bodyText={bodycontents[1]} />
                <ABenefit heading="Performance Summary"  bodyText={bodycontents[2]}/>
    </motion.div>
}

function ABenefit({heading,bodyText}){
    return <motion.div id="aBenefit">
                <motion.p id="heading">{heading}</motion.p>
                <motion.p id="bodyText">{bodyText}</motion.p>
    </motion.div>
}

export function Testimonial(){
    const testimonials = [{image:Hero,text:"This platform really helped with my scout for a junior developer, I was able to set this test woth confidence that there will be no funny business on the part of my test takers ",name:"Anne Burrel",role:"UI/UX designer"}]

    return <motion.div id="Testimonial">
            <motion.div id="GeneralTextContainer">
                <TestimonialHeader/>
                <GeneralTestimonial/>
            </motion.div>
            <ListOfTestimonials testimonials={testimonials}/>
    </motion.div>
}

function TestimonialHeader(){
    return <motion.div id="testimonialHeader">
                <motion.span></motion.span>
                <motion.p>TESTIMONIAL</motion.p>
    </motion.div>
}

function GeneralTestimonial(){
    return <motion.div id="generalBody" >
                <motion.p id="theySay">What They Say?</motion.p>
                <motion.p id="body">Testal has over 11k+ Positive Ratings from our users around the world. Most of the Teachers, Instructors and Students were greatly helped by the website.</motion.p>
                <Button variant="contained" >Give us Your FeedBack</Button>
    </motion.div>
}

// @todo implement swiper or use horizontal scroll snapping 
function ListOfTestimonials({testimonials}){
    return <motion.div id="listOTestimonials">
                {
                    testimonials.map(function(testimonial){
                            return <Atestimonial imgLinks={testimonial.image} name={testimonial.name} role={testimonial.role} words={testimonial.text} />
                    })
                }
    </motion.div>
}

function Atestimonial({imgLinks,words,name,role}){
    return <motion.div id="aTestimonialContainer">
                <motion.div id="imageDiv">
                    <motion.img src={imgLinks} />
                </motion.div>
                <motion.div id="textsDiv">
                    <motion.p id="opinion">
                        {words}
                    </motion.p>
                    <motion.div id="biodataContainer"> 
                        <motion.p id="nameP">{name}</motion.p>
                        <motion.p id="roleP">{role}</motion.p>
                    </motion.div>
                </motion.div>
            </motion.div>
}


export function Footer(){
    return <motion.div id="footerContainer">
                <motion.div id="footerMainSection">
                    <Logo/>
                    <FooterCategories/>
                </motion.div>
                <BottomFooterBand/>
            </motion.div>
}

function FooterCategories(){
    return <motion.div id="footerCategoriesContainer">
                <FooterCategory header="" subContents={["Take Test","Set Test","Signup","Login"]} />
                <FooterCategory header="Company" subContents={["About Us","Careers","Press","News"]} />
                <FooterCategory header="Social" subContents={["Instagram","Linkedin","Medium","Twitter"]} />
                <FooterCategory header="Legal" subContents={["Contact","Cookies","Privacy","Terms"]} />
            </motion.div>
}

function FooterCategory({header,subContents = []}){
    return <motion.div id="footerCategoryContainer">
                <motion.p id="categoryHeading">
                    {header}
                </motion.p>
                <motion.div id="bodyContent">
                    {
                        subContents.map(content => {
                                return <motion.p>
                                            {content}
                                        </motion.p>
                        })
                    }
                </motion.div>
    </motion.div>
}

function BottomFooterBand(){
    return <motion.div id="bottomFooterBandContainer">
                <motion.p id="rightsP">
                    © 2024 Coderosion. All rights reserved.
                </motion.p>
                <FooterSocials/>
            </motion.div>
}

function FooterSocials(){
    return <motion.div id="footerSocialsContainer" >
                <motion.span>Insta</motion.span>
                <motion.span>whats</motion.span>
                <motion.span>link</motion.span>
                <motion.span>twitt</motion.span>
            </motion.div>
}