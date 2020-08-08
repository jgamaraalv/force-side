import { combineReducers } from "redux";

import homeReducer from "./modules/home/reducer";
import modalReducer from "./modal/reducer";
import ApplicationState from "./State";

const rootReducer = combineReducers<ApplicationState>({
  modal: modalReducer,
  modules: combineReducers({
    home: homeReducer,
  }),
});

export default rootReducer;
