import { ACTION_TYPES } from "../actions/offerAsset";

//  trebuie sa specificam ce stocam in redux adica in "state"
const initialState = {
  list: [],
};

export const offerAsset = (state = initialState, action) => {
  //aici action este parametrul trimis din actions in functia dispatch(type:...)
  // reducerul trebuie sa actualizeze valorile din lista de mai sus
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL: //in payload vom avea toate inregistrarile din tabela
      return {
        ...state,
        list: [...action.payload], // se vor pune datele din actions (offerAsset) in lista
      };
    // break; nu e nevoie de break daca avem return

    default:
      return state;
  }
};
