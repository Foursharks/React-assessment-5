//display options for the user to select once they've chosen a country

// The Main.js component does the following:

// By default, displays its child component “Overview”

// Provides 3 buttons to change the component being viewed

// If Overview.js is displayed, it does the following :

// Reads from global state concerning displayCountry

// Displays the displayCountry’s general information

// If Weather.js is displayed, it does the following :

// Reads from global state to get the latitude and longitude of the capital city of the displayCountry

// Makes an additional API call to another API to get the weather of those coordinates

// Displays the information of the current weather at the displayCountry’s capital

// If Symbols.js is displayed, it does the following :

// Reads from global state concerning displayCountry

// Displays the displayCountry’s national symbols

import React, { useState } from "react";
import Weather from "./Weather";
import Symbols from "./Symbols";
import Overview from "./Overview";


const MainDisplay = () => {
    const [view, setView] = useState("Overview");
    return (
        <div className="stack">
            <div className="tab-select">
                <button onClick={() => setView("Overview")}>Overview</button>
                <button onClick={() => setView("Weather")}>
                    Current Weather!!!! at Capitol
                </button>
                <button onClick={() => setView("Symbols")}>Symbols</button>
            </div>
            {view === "Overview" && <Overview/>}
            {view === "Weather" && <Weather/>}
            {view === "Symbols" && <Symbols/>}
        </div>
    );
};

export default MainDisplay;
