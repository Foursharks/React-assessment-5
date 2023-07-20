// The OptionDisplay component does the following:

// Reads the app-wide state (or “global” state) that is holding all of the potential countries

// Displays the list of all potential countries

// When a user clicks on one of those potential countries, OptionDisplay sets that single country on a global state property called “displayCountry”

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPotentials } from "../redux/slices/potentialCountriesSlice";
import { setDisplayCountry } from "../redux/slices/displayCountrySlice";

const OptionDisplay = () => {
  let currentPotentials = useSelector(selectPotentials);
  console.log(currentPotentials);
  const dispatch = useDispatch(); 
  return (
    <div className="stack">
      {currentPotentials.map((e, i) => {
        return (
          <h2 key={e.name.Official} className="country-option"
          onClick={() => {
              dispatch(setDisplayCountry(currentPotentials[i]));
          }}>
            {e.name.common}
            
          </h2>
        );
      })}
    </div>
  );
};

export default OptionDisplay;
