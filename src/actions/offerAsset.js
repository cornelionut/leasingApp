import api from "./api";
// export const create = data => {
//     return {
//         type: "create",
//         payload:data    // payload este key care are ca value data
//     }
// }

//  aici returnam un obiect cu operatia si datele cerute
//  din componenta vom apela aceasta metoda "create" prin intermediul functiei dispatch(create(fullName: etc...))
//  vom face apeluri api in interiorul reducerului
//  in aceste actiuni redux apeluri de API asincrone nu sunt permise. Pentru a face astfel de operatii am instalat pachetul middleware "thunk" folostin in store.js

export const ACTION_TYPES = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  FETCH_ALL_OFFER_ASSET: "FETCH_ALL_OFFER_ASSET",
  FETCH_ALL_OFFERS: "FETCH_ALL_OFFERS",
  FETCH_ALL_ASSET_TYPES: "FETCH_ALL_ASSET_TYPES",
  FETCH_ALL_CAR_MAKE: "FETCH_ALL_CAR_MAKE",
  FETCH_ALL_LEASING_DOCUMENT: "FETCH_ALL_LEASING_DOCUMENT",
  FETCH_ALL_CAR_MODELS: "FETCH_ALL_CAR_MODELS",
  FETCH_ALL_CAR_VERSIONS: "FETCH_ALL_CAR_VERSIONS",
};

//  Structura unei functii

export const fetchAll = () => (dispatch) => {
  //get api req
  //call dispatch()
  api
    .offerAsset()
    .fetchAll()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.FETCH_ALL_OFFER_ASSET,
        payload: response.data, //retrieve DATA from asp.net core api
      });
    })
    .catch((err) => console.log(err));
};

export const fetchOffers = () => (dispatch) => {
  api
    .offers()
    .fetchAll()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.FETCH_ALL_OFFERS,
        payload: response.data,
      });
    })
    .catch((err) => console.log(err));
};

export const fetchAssetTypes = () => (dispatch) => {
  api
    .assetTypes()
    .fetchAll()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.FETCH_ALL_ASSET_TYPES,
        payload: response.data,
      });
    })
    .catch((err) => console.log(err));
};

export const fetchLeasingDocument = (id) => (dispatch) => {
  api
    .leasingDocument()
    .fetchById(id)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.FETCH_ALL_LEASING_DOCUMENT,
        payload: response.data,
      });
    })
    .catch((err) => console.log(err));
};

export const fetchCarMakes = () => (dispatch) => {
  api
    .carMakes()
    .fetchAll()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.FETCH_ALL_CAR_MAKE,
        payload: response.data,
      });
    })
    .catch((err) => console.log(err));
};

export const fetchCarModels = () => (dispatch) => {
  api
    .carModels()
    .fetchById()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.FETCH_ALL_CAR_MODELS,
        payload: response.data,
      });
    })
    .catch((err) => console.log(err));
};

export const fetchCarVersions = () => (dispatch) => {
  api
    .carVersions()
    .fetch()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.FETCH_ALL_CAR_VERSIONS,
        payload: response.data,
      });
    })
    .catch((err) => console.log(err));
};
