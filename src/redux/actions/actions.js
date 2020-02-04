import { UPDATE_STORE } from "./actionsType";
import brastlewarkService from "../../service/brastlewarkService";

export const getBrastlewark = page => async dispatch => {
  try {
    const response = await brastlewarkService(page);
    console.log(response);
    dispatch({
      type: UPDATE_STORE,
      payload: {
        storeGnomes: response
      }
    });
    return response;
  } catch (e) {
    console.log(e);
  }
};
