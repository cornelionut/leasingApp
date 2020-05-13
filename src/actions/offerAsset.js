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
};

//  Structura unei functii

// export const fetchAll = () => {
//     return dispatch => {
//         //..
//     }
// }

//  SAU

export const fetchAll = () => (dispatch) => {
  //get api req
  //call dispatch()
  api
    .offerAsset()
    .fetchAll()
    .then((response) => {
      console.log(response);
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
      console.log(response);
      dispatch({
        type: ACTION_TYPES.FETCH_ALL_OFFERS,
        payload: response.data,
      });
    })
    .catch((err) => console.log(err));
};
