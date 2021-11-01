import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class NavigationComponent extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="nav-wrapper">
                {/* <div className="left-side">
                    Gamescape
                </div> */}

                <div className="right-side">
                    <div className="nav-link-wrapper">
                        <NavLink exact to = "/">
                            Home
                        </NavLink>
                    </div>
                    {/* you need to figure out how to make these links go to the game page */}
                    <div className="nav-link-wrapper">
                        <a href = "https://agent-marsh-website.herokuapp.com/home.html" >
                            Agent Marsh
                        </a>
                    </div>
                    <div className="nav-link-wrapper">
                        <a href = "https://oneiric-game.herokuapp.com/index.html" >
                            Oneiric
                        </a>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink to = "/about">
                            Dev Team
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

