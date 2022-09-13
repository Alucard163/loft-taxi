import { combineReducers } from "redux";
import auth from "./auth";
import card from "./getCard";
import address from "./getAdresses";
import route from "./getRoute";

export default combineReducers({ auth, card, address, route })