import { combineReducers } from "redux";
import pokimonDetailsReducer from "./pokimonDetailsReducer";
import pokimonReducer from "./pokimonReducer";
const rootReducer = combineReducers({
  pokimonList: pokimonReducer,
  pinimonDetails: pokimonDetailsReducer,
});
export type RootSate = ReturnType<typeof rootReducer>;
export default rootReducer;
