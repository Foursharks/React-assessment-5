//App.js initially should display an option display to choose an option, as well as a header. Once a user chooses an option, main display should show 

// The App.js component does the following:

// Is updated via redux with the new displayCountry state (it is now truthy)

// Since there is now displayCountry state (truthy), App.js changes to display the Main.js component, not the Options.js component



import "./App.css";
import {useSelector} from "react-redux"; 
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";
import { selectPotentials } from "./redux/slices/potentialCountriesSlice";
import {selectDisplay} from "./redux/slices/displayCountrySlice"


function App() {
    const potentials = useSelector(selectPotentials); 
    console.log(potentials)
    let currentDisplay = useSelector(selectDisplay);
    console.log("Display", currentDisplay)
    return (
        <div className="App font-link">
            <Header />
            {currentDisplay ? <MainDisplay /> : <OptionDisplay />}
        </div>
    );
}

export default App;
