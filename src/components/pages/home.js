import React from "react";

import GameTileContainer from "../game-tile/game-tile-container";
import HeroContainer from "../hero-section/hero-container";

export default function() {
    return(
        <div>
            {/* here is the main body stuff */}
            <HeroContainer />
            <GameTileContainer />
        </div>
    );
}