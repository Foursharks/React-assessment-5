import {configureStore} from "@reduxjs/toolkit"; 
// this doesn't match what's in potentialCountriesSlice - 

import potentialCountriesReducer from "../redux/slices/potentialCountriesSlice";
import displayedCountryReducer from "../redux/slices/displayCountrySlice"

export default configureStore({
    reducer: {
        potentialCountries: potentialCountriesReducer, 
        displayedCountry: displayedCountryReducer
    }
    }
); 