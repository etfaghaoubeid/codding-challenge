import { FETCHING_POKIMONS } from "../constants/actionTypes";
import { startFetching } from "./pokimonActions";

test("it should return fetching  type", () => {
  expect(startFetching()).toEqual({ type: FETCHING_POKIMONS });
});
