import { UPDATE_STORE } from "../actions/actionsType";

const initialState = {
  storeGnomes: [],
  filteredGnomes: []
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_STORE:
      return {
        ...state,
        ...payload
      };
    default:
      return {
        ...state
      };
  }
};

export default reducer;
