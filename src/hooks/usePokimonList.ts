import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startFetching } from "../actions/pokimonActions";
import { RootSate } from "../reducers/rootReducer";
import { PokimonListInitiaState } from "../types";

export function usePokimonList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startFetching());
  }, []);
  const { isLoading, pokimons }: PokimonListInitiaState = useSelector(
    (state: RootSate) => state.pokimonList
  );
  return { isLoading, pokimons };
}
