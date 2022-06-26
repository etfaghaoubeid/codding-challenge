import { PokimosListAction, PokimonListInitiaState } from "../types";
import {
  FETCHING_POKIMONS,
  FETCHING_POKIMONS_FAIL,
  FETCHING_POKIMONS_SUCCESS,
} from "../constants/actionTypes";
const initialSate: PokimonListInitiaState = {
  isLoading: true,
  pokimons: [],
  errorMessage: "",
};
export default function pokimonReducer(
  state = initialSate,
  action: PokimosListAction
) {
  switch (action.type) {
    case FETCHING_POKIMONS:
      return {
        ...state,
        isLoading: true,
      };
    case FETCHING_POKIMONS_SUCCESS:
      return {
        ...state,
        pokimons: action.payload.pokimons,
        isLoading: action.payload.isLoading,
        errorMessage: action.payload.errorMessage,
      };
    case FETCHING_POKIMONS_FAIL:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
        isLoading: action.payload.isLoading,
      };
    default:
      return state;
  }
}
