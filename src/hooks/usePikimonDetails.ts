import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startFetchingPokinDetails } from "../actions/pokimonActions";
import { RootSate } from "../reducers/rootReducer";
import { PokimonDetaislState } from "../types";

export function usePokimonDetails(name: string) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startFetchingPokinDetails(name));
  }, [dispatch, name]);
  const { isLoading, pokimon }: PokimonDetaislState = useSelector(
    (state: RootSate) => state.pinimonDetails
  );
  return { isLoading, pokimon };
}
