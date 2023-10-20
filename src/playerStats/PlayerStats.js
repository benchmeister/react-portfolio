import React from "react";
import "../styles/playerStats.css";

const PlayerStats = () => { //creating the character's level bar
    return (
        <div id="playerStats">
            <h1>WEI FENG : LVL 22</h1>
            <div id="playerStats__lines">
                <span id="playerStats__lines__thick"></span>
                <span id="playerStats__lines__thin"></span>
            </div>
            <h2>Aspiring Penetration Tester</h2>
        </div>
    )
}

export default PlayerStats