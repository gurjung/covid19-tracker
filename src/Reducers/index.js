import { countryCodeReducer } from "./countryCode";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({ country: countryCodeReducer });
