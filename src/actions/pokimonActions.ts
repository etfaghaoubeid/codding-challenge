import {
  FETCHING_POKIMONS,
  FETCHING_POKIMONS_FAIL,
  FETCHING_POKIMONS_SUCCESS,
  FETCHING_POKIMON_DETAILS,
  FETCHING_POKIMON_DETAILS_FAIL,
  FETCHING_POKIMON_DETAILS_SUCCESS,
} from "../constants/actionTypes";
import {
  FetchingPokimonDetailsFail,
  FetchingPokimonDetailsSuccess,
  FetchingPokimonsFail,
  FetchingPokimonsSuccess,
  PokimonDetailsPayload,
  PokimonDetailsPayloadOnFail,
  PokimonPayload,
  PokimonPayloadOnFail,
  StartFetching,
} from "../types";

export const startFetching = (): StartFetching => {
  return {
    type: FETCHING_POKIMONS,
  };
};
export function fetchinPokimonsSuccess(
  payload: PokimonPayload
): FetchingPokimonsSuccess {
  return {
    type: FETCHING_POKIMONS_SUCCESS,
    payload: payload,
  };
}
export function fetchinPokimonsFail(
  payload: PokimonPayloadOnFail
): FetchingPokimonsFail {
  return {
    type: FETCHING_POKIMONS_FAIL,
    payload: payload,
  };
}

export const startFetchingPokinDetails = (
  name: string
): StartFetching & { name: string } => {
  console.log("startFetchingPokinDetails called");

  return {
    name: name,
    type: FETCHING_POKIMON_DETAILS,
  };
};
export function fetchinPokimonDetailsSuccess(
  payload: PokimonDetailsPayload
): FetchingPokimonDetailsSuccess {
  return {
    type: FETCHING_POKIMON_DETAILS_SUCCESS,
    payload: payload,
  };
}
export function fetchinPokimonDetailsFail(
  payload: PokimonDetailsPayloadOnFail
): FetchingPokimonDetailsFail {
  return {
    type: FETCHING_POKIMON_DETAILS_FAIL,
    payload: payload,
  };
}
