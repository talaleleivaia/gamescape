import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class GameTileItem extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        gameTileImageClass: ""
      };
    }

    render() {
        const { id, title, description, prompt, genre, platform, url, button, image1 } = this.props.item
        return (
            <div className="game-tile-wrapper">
              <div className="spacer" id="game-tile-position" />
                <div className="tile-wrapper">
                  <div className="card">
                  <div className="game-tile-img-background" style={{backgroundImage: "url(" + image1 + ")"}} /></div>
                  
                  <div className={"img-text-wrapper " + this.state.gameTileImageClass}>
                      <div className="img-text-content">
                          <div className="img-text-title">{title}</div>
                          <div className="img-text-item">{description}</div>
                          <div className="img-text-item">{prompt}</div>
                          <a href={url} className="img-text-button">{button}</a>
                      </div>
                  </div>
                </div>
            </div>
        );
    }
}