import React from "react";
import "./About.css";
import aboutVector from './../../assets/about_vector.png';
import Header from "./../Header/Header";
import FooterLink from "./../FooterLink/FooterLink";
import displayPic from "./../../assets/display.png";

function About() {

    return (
        <div className="section-container">
            <Header
                heading="About Me"
                details="I'm Undergraduate student in Malla Reddy University"
            />

            <div className="about-main">

                <div className="about-main-left">


                    {/*Subsection 2*/}
                    <h3 className="about-sub-head">Mentor/Youtuber</h3>
                    <p className="about-details"> I have a dedicated YouTube channel with over 3k+ community. The sole aim of that
                    initiative is to mentor students on topics like GATE,Mental health and career. I do the
                    same through my Linkedin and Instagram.
                    Check out my channel: {' '} 
                    <a className="about-link-element" 
                    href="https://www.youtube.com/c/RibhuMukherjee" 
                    target="_blank">Ribhu Mukherjee</a></p>

                    {/*Subsection 3*/}
                    <h3 className="about-sub-head">Public Speaker</h3>
                    <p className="about-details"> Being a passionate public speaker, I've given talks at more than 
                    10 engineering colleges/universities till now! Want me to speak in your event? {' '} 
                    <a className="about-link-element" 
                    href="mailto:iribhumukherjee@gmail.com"  
                    target="_blank">Email me the details!</a></p>


                </div>
                <div className="about-main-right">
                    <a href="https://www.linkedin.com/in/ribhu-mukherjee/" target="_blank"><img src={displayPic} className="about-anime" alt="about" ></img></a>
                </div>

            </div>

            <FooterLink
                phrase="Check out my "
                link="projects!"
                toAddress="/projects"
            />
            {/*Vector frame*/}
            <div className="vector-frame">
                <img src={aboutVector} className="about-vector" alt="about" />

            </div>
        </div>
    )
}

export default About;