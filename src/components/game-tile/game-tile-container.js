// this component will be the container for the main body of the webpage. it will hold the game tiles that span across the home page and it will hold the actual game on the game page

import React, { Component } from "react";
import axios from "axios";

import GameTileItem from "./game-tile-item";

export default class GameTileContainer extends Component {
    constructor() {
        super();

        this.state = {
           data: []
        };
    }

    getGameTileItem() {
        axios
          .get("https://game-space1-api.herokuapp.com/game-tiles")
          .then(response => {
           // handle success
            this.setState({
                data: response.data
            });
          })
          .catch(error => {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
      }


    gameTileItems() {
        return this.state.data.map(item => {
            console.log("game item", item);
            return <GameTileItem key={item.id} item={item}/>
        });
    }

    componentDidMount() {
        this.getGameTileItem();
    }

    render () {
        return (
            <div>
                {this.state.pageTitle}
                <div className="game-tiles-wrapper">
                    {this.gameTileItems()}
                </div>
            </div>
        );
    }
}