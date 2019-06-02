import { tabNames } from "constants/tabsConstants";
import { createAction, handleAction } from "redux-actions";

const CHANGE_ACTIVE_TAB = "CHANGE_ACTIVE_TAB";
const intialStateTabs = { selectedTabLink: tabNames.ONE };

export const changeTab = createAction(CHANGE_ACTIVE_TAB);

export const tabs = handleAction(
  CHANGE_ACTIVE_TAB,
  (state, action) => ({ ...state, selectedTabLink: action.payload }),
  intialStateTabs
);
