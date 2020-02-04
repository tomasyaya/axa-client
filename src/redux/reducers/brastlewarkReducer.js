import { UPDATE_STORE, FILTER, LOADING } from "../actions/actionsType";

const initialState = {
  storeGnomes: [],
  filteredGnomes: [],
  hasNext: true,
  loading: false
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_STORE:
      return {
        ...state,
        ...payload
      };
    case FILTER:
      return {
        ...state,
        filteredGnomes: [...state.storeGnomes].filter(gnome =>
          gnome.name.toLowerCase().includes(payload)
        )
      };
    case LOADING:
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
