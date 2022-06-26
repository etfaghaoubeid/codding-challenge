import {
  fetchinPokimonsFail,
  fetchinPokimonsSuccess,
} from "../actions/pokimonActions";
import pokimonReducer from "./pokimonReducer";
test("should return the initial state", () => {
  expect(pokimonReducer(undefined, {})).toEqual({
    isLoading: true,
    pokimons: [],
    errorMessage: "",
  });
});

// test("should handle api call failure", () => {
//   const previousState = { isLoading: true, prokimons: [], errorMessage: "" };
//   const expectedState = {
//     isLoading: false,
//     pokinmons: [],
//     errorMessage: " Somthing went wrong",
//   };
//   expect(
//     pokimonReducer(
//       previousState,
//       fetchinPokimonsFail({
//         isLoading: false,
//         errorMessage: " Somthing went wrong",
//       })
//     )
//   ).toBe(expectedState);
// });

test("should handle api call success", () => {
  const previousState = { isLoading: true, pokimons: [], errorMessage: "" };
  const expectedState = {
    pokimons: [
      {
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
    isLoading: false,
    errorMessage: "",
  };
  expect(
    pokimonReducer(previousState, fetchinPokimonsSuccess(expectedState))
  ).toStrictEqual(expectedState);
});
