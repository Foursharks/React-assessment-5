import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Overview = () => {
    let currentDisplay = useSelector(selectDisplay);
    return (
        <div className="stack">
            <h1>Official Name: {currentDisplay.name.official}</h1>
            <h2>Common Name: {currentDisplay.name.common}</h2>
            <h3>Region: {currentDisplay.region}</h3>

            <table className="overview-table">
            <tr>
                    <td>Start of week : </td>
                    <td>
                        {currentDisplay.startOfWeek} 
                    </td>
                </tr>
                <tr>
                    <td>Borders: </td>
                    <td>
                        {currentDisplay.borders
                            ? currentDisplay.borders.map((e, i, arr) => {
                                  if (i + 1 === arr.length) {
                                      return `${e}`;
                                  } else {
                                      return `${e}, `;
                                  }
                              })
                            : "N/A"}
                    </td>
                </tr>
                <tr>
                    <td>Capitol: </td>
                    {currentDisplay.capital.map((e) => (
                        <td>{e}</td>
                    ))}
                </tr>
                <tr>
                    <td>Population: </td>
                    <td>{currentDisplay.population}</td>
                </tr>
                <tr>
                    <td>Continents: </td>
                    {currentDisplay.continents.map((e) => (
                        <td>{e}</td>
                    ))}
                </tr>
                <tr>
                    <td>Member of UN: </td>
                    <td>{currentDisplay.unMember ? "true" : "false"}</td>
                </tr>
            </table>
        </div>
    );
};

export default Overview;
