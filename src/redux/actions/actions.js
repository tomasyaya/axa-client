import { UPDATE_STORE, FILTER, LOADING } from "./actionsType";
import brastlewarkService from "../../service/brastlewarkService";

export const getBrastlewark = page => async dispatch => {
  try {
    dispatch({
      type: LOADING,
      payload: {
        loading: true
      }
    });
    const { results, hasNext } = await brastlewarkService(page);
    dispatch({
      type: UPDATE_STORE,
      payload: {
        storeGnomes: results,
        filteredGnomes: results,
        hasNext,
        loading: false
      }
    });
  } catch (e) {
    console.log(e);
  }
};

export const filterBrastlewark = name => dispatch =>
  dispatch({
    type: FILTER,
    payload: name
  });
