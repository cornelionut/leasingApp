import { combineReducers } from "redux";
import { offerAsset, offers } from "./offerAsset";

export const reducers = combineReducers({
  offerAsset,
  offers, //vom trimite mai departe toti reducerii catre store.js
});
