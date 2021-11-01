import React, { Component } from "react";
import {Link} from "react-scroll";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";


class FadeExample extends React.Component {
  render() {
    return (
      <div className="bg-img">
        <div className="hero-wrapper">
          {/* <video src="./hero-section/hero-video.mp4" autoPlay loop muted /> */}
          <div className="hero-item-wrapper"> 
              <Fade right duration={1000}><div className="hero-item-YouFound"> You've found the </div></Fade>
              <Fade right duration={1350}><div className="hero-item-game"> Game </div></Fade>
              <Fade left duration={1700}><div className="hero-item-scape"> Scape </div></Fade>
              <Fade left duration={1900}><div className="hero-item-DoYouEnter"> Do You Enter? </div></Fade>
              
                <Flip bottom delay={2700}>
                  <div className="hero-item-button">
                  <Link to="game-tile-position" smooth={true} duration={1520}>
                    [I enter.]
                  </Link>
                  </div>
                </Flip>
          </div>  
        </div>
      </div>
    );
  }
}

export default FadeExample;

