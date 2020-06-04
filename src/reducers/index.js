import { combineReducers } from "redux";
import {
  offerAsset,
  offers,
  assetTypes,
  carMakes,
  leasingDocument,
  carModels,
  carVersions,
} from "./offerAsset";

export const reducers = combineReducers({
  offerAsset,
  offers, //vom trimite mai departe toti reducerii catre store.js
  assetTypes,
  carMakes,
  leasingDocument,
  carModels,
  carVersions,
});
