import { runSaga } from "redux-saga";
import {
  PokimosListAction,
  Pokimon,
  PokimonPayload,
  PokimonPayloadOnFail,
} from "../types";
import * as api from "../services/pokimonServices";
import { fetchPokimonsSaga } from "./pokimonSaga";
import {
  fetchinPokimonsFail,
  fetchinPokimonsSuccess,
} from "../actions/pokimonActions";

test("Should handle pokimons load success", async () => {
  const dispatchedActions: PokimosListAction[] = [];
  const paylod: PokimonPayload = {
    isLoading: false,
    pokimons: [
      {
        weight: 39,
        name: "bokimon",
        id: "1",
        sprites: {
          back_default: "string",
          back_female: null,
          back_shiny: "string",
          back_shiny_female: null,
          front_default: "string",
          front_female: null,
          front_shiny: "string",
          front_shiny_female: null,
        },
      },
    ],
  };
  const mockedPokimons: Pokimon[] = [
    {
      weight: 39,
      name: "bokimon",
      id: "1",
      sprites: {
        back_default: "string",
        back_female: null,
        back_shiny: "string",
        back_shiny_female: null,
        front_default: "string",
        front_female: null,
        front_shiny: "string",
        front_shiny_female: null,
      },
    },
  ];
  const mockedGetPokimonsPromise = (api.getPokimonList = jest.fn(() =>
    Promise.resolve(mockedPokimons)
  ));
  const fakeStore = {
    getState: () => ({ isLoading: true, pokimons: [], errorMessage: "" }),
    dispatch: (action: PokimosListAction) => dispatchedActions.push(action),
  };
  await runSaga(fakeStore, fetchPokimonsSaga).done;
  expect(mockedGetPokimonsPromise.mock.calls.length).toBe(1);
  expect(dispatchedActions[0]).toStrictEqual(fetchinPokimonsSuccess(paylod));
});

test("should handle pokimons load errors in case of failure", async () => {
  const dispatchedActions: PokimosListAction[] = [];
  const payload: PokimonPayloadOnFail = {
    isLoading: false,
    errorMessage: "fetching fail",
  };
  const mockedGetPokimonsPromise = (api.getPokimonList = jest.fn(() =>
    Promise.reject("fetching fail")
  ));
  const fakeStore = {
    getState: () => ({ nextPage: 1 }),
    dispatch: (action: PokimosListAction) => dispatchedActions.push(action),
  };
  await runSaga(fakeStore, fetchPokimonsSaga).done;
  expect(mockedGetPokimonsPromise.mock.calls.length).toBe(1);

  expect(dispatchedActions[0]).toStrictEqual(fetchinPokimonsFail(payload));
});
