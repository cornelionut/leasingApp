import { ACTION_TYPES } from "../actions/offerAsset";

//  trebuie sa specificam ce stocam in redux adica in "state"
const initialState = {
  list: [],
  isLoading: true,
};

export const offerAsset = (state = initialState, action) => {
  //aici action este parametrul trimis din actions in functia dispatch(type:...)
  // reducerul trebuie sa actualizeze valorile din lista de mai sus
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL_OFFER_ASSET: //in payload vom avea toate inregistrarile din tabela
      return {
        ...state,
        list: [...action.payload], // se vor pune datele din actions (offerAsset) in lista
        isLoading: action.isLoading,
      };
    // break; nu e nevoie de break daca avem return
    default:
      return state;
  }
};

export const offers = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL_OFFERS:
      return {
        ...state,
        list: [...action.payload],
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};

export const assetTypes = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL_ASSET_TYPES:
      return {
        ...state,
        list: [...action.payload],
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};

export const leasingDocument = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL_LEASING_DOCUMENT:
      return {
        ...state,
        list: [...action.payload],
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};

export const carMakes = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL_CAR_MAKE:
      return {
        ...state,
        list: [...action.payload],
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};

export const carModels = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL_CAR_MODELS:
      return {
        ...state,
        list: [...action.payload],
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};

export const carVersions = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL_CAR_VERSIONS:
      return {
        ...state,
        list: [...action.payload],
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};
