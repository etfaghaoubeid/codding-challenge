import { PokimonDetaislState, PokimonDetailsAction } from "../types";
import {
  FETCHING_POKIMON_DETAILS,
  FETCHING_POKIMON_DETAILS_FAIL,
  FETCHING_POKIMON_DETAILS_SUCCESS,
} from "../constants/actionTypes";
const initialSate: PokimonDetaislState = {
  isLoading: true,
  pokimon: null,
  errorMessage: "",
};
export default function pokimonDetailsReducer(
  state = initialSate,
  action: PokimonDetailsAction
) {
  switch (action.type) {
    case FETCHING_POKIMON_DETAILS:
      return {
        ...state,
        isLoading: true,
      };
    case FETCHING_POKIMON_DETAILS_SUCCESS:
      return {
        ...state,
        pokimon: action.payload.pokimon,
        isLoading: action.payload.isLoading,
        errorMessage: action.payload.errorMessage,
      };
    case FETCHING_POKIMON_DETAILS_FAIL:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
        isLoading: action.payload.isLoading,
      };
    default:
      return state;
  }
}
