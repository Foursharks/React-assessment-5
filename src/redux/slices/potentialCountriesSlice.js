import {createSlice} from "@reduxjs/toolkit"; 
const potentialCountriesSlice = createSlice({
    name: `potentialCountries`,
    initialState: {
        value: [
            {
                name: {
                    common: 'America',
                }
            }
        ]
    }, 
    reducers: {
        setPotentialCountries: (state, action) => {state.value= action.payload}, 
        deletePotentialCountries: (state) => {state.value = null}
    }
}

); 

export const {setPotentialCountries, deletePotentialCountries} = potentialCountriesSlice.actions; 

// Export (NOT default) a const named “selectPotentials” that has the value of a function. This function should receive “state” as a parameter and return state.potentialCountries.value
export const selectPotentials = (state) => 
        state.potentialCountries.value;

export default potentialCountriesSlice.reducer; 