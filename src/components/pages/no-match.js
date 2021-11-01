import React from "react";
import {Link} from "react-router-dom";
import Fade from "react-reveal/Fade";

export default function() {
    return (
        <div className="no-match-bg-img">
            <Fade left>
                <div className="banner-wrapper">
                    <div className="banner">
                        <div className="banner-text">
                            Oh, it seems you stumbled upon a part of the gamescape we don't own.
                            Quite beautiful, but nonetheless you should get back.
                        </div>
                        <div className="banner-text-button">
                            <Link to="/">[Go Back.]</Link>
                        </div>
                        
                    </div>
                </div>
            </Fade>
        </div>
    )
}