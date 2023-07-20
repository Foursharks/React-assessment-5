//header displays at the top of the app, and is the search bar for countries

// The Header Component does the following:

// Clears all global state related to countries (creates a clean slate to build on)

// Makes an API call to get a list of countries that match the user’s input

// Receives the response from the API, which is a list of potential countries that we may want to see details about

// Sets an app-wide state property with the list of countries (called “potentialCountries”), allowing any component app-wide to access this data, thanks to redux

import axios from "axios";
import React, { useState } from "react";
import { BsFillFlagFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePotentialCountries,
  setPotentialCountries,
} from "../redux/slices/potentialCountriesSlice";

import {
  selectDisplay,
  deleteDisplayCountry,
} from "../redux/slices/displayCountrySlice";

const Header = () => {
  const [input, setInput] = useState();
  const dispatch = useDispatch();
  let currentDisplay = useSelector(selectDisplay);

  return (
    <div className="header">
      <div className="home">
        <BsFillFlagFill style={{ marginRight: "10px" }} fontSize="1.6em" />
        <h3 className="home-country">
          {currentDisplay && currentDisplay.name.common}
        </h3>
      </div>
      <div className="country-input">
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            axios
              .get(`https://restcountries.com/v3.1/name/${input}`)
              .then((res) => {
                console.log(res.data);
                dispatch(deleteDisplayCountry());
                dispatch(deletePotentialCountries());
                dispatch(setPotentialCountries(res.data));
              })
              .catch((err) => {
                alert("No countries found that match your search!");
              });
          }}
        >
          search
        </button>
      </div>
    </div>
  );
};

export default Header;
