import React, {useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./Home.css";
import Header from "./../Header/Header";
import displayPic from "./../../assets/display.png";

import homeAnime from "./../../assets/home_anime.gif";
import github from '../../assets/gh.png';
import linkedin from '../../assets/li.png';
import instagram from '../../assets/in.png';
import web from '../../assets/web.png';


function Home() {

    return (
        <div className="home-container">
            <div className="about-main-right">
                <img src={displayPic} className="about-anime" alt="about" ></img>
            </div>
            <div className="about-main-left">

                <h1 className="about-head">Hello</h1>
                <p className="about-para">Hey, I am Chetana Reddy, from Hyderabad with a
                 strong foundation in computer science. 
                  I'm  enthusiastic about Machine Learning ,MERN stack, Data Analytics, Microsoft Office. I'm looking forward to connect with fellow 
                developers and industry professionals to exchange ideas, share knowledge, and embark on an incredible journey of growth and innovation.</p>
                
                <div className="head-btns">
                    <a href="https://drive.google.com/file/d/1cM2ArX2zQfuFIvddQjJs3fdFT7ALTyK3/view?usp=drive_link" target="_blank" className="btn btn-red">
                        <p className="btn-text" >Resume</p>
                    </a>
                    <Link to="/Projects" className="btn btn-blue">
                        <p className="btn-text">Projects</p>
                    </Link>
                    <Link to="/skills" className="btn btn-yellow">
                        <p className="btn-text">Skills</p>
                    </Link>
                    <Link to="/contact" className="btn btn-green">
                        <p className="btn-text">Contact</p>
                    </Link> 
                </div>
            </div>
             {/*Social icons*/}
             <div className="social-icons-container">
                <a href="https://github.com/ribhu0908" target="_blank" className="social-icon">
                    <img src={github} alt="github-link"></img>
                </a>

                <a href="https://www.linkedin.com/in/ribhu-mukherjee/" target="_blank" className="social-icon">
                    <img src={linkedin} alt="linkedin-link"></img>
                </a>

                <a href="https://instagram.com/ribhumukherjee" target="_blank" className="social-icon">
                    <img src={instagram} alt="instagram-link"></img>
                </a>

                <a href="https://ribhu0908.github.io/Portfolio/#/" target="_blank" className="social-icon">
                    <img src={web} alt="website-link"></img>
                </a>
            </div>
          
        </div>
        
    );
}


export default Home;