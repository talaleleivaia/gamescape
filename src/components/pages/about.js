import React from "react";
import Fade from "react-reveal/Fade";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BioImage from "../../../static/assets/images/bio-image.png";

export default function() {
    return(
        <div className="bg-about-img">
            <div className="about-page-wrapper"> 
                <Fade left duration={1000}>
                    <div className="right-column">
                        <div className="about-header">
                            There's no I in TEAM.
                        </div>
                        <div className="about-subheader">
                            Well, I guess in this case...
                        </div>
                    </div> 
                </Fade>

                <Fade top duration={1000}>
                    <div className="left-column">
                        <div className="about-text">
                            There is something special about video games that is more than fighting, shooting, and leveling up your character. At their core video games are <span>stories</span>. Varying levels of game mechanics can enhance those stories. But still, the stories are where it really counts. 
                        </div>
                        <div className="about-text">
                            My name is Talei. I'd like to help build those stories and this site is my start. The essence of what makes a video game special in the realm of storytelling is that you the player have a choice. 
                            Using the power of Ink by the team at Inkle I was able to start building some stories that were interesting to me.
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
}