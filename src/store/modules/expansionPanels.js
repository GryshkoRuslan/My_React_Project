import { tabNames } from "constants/tabsConstants";
import { createAction, handleAction } from "redux-actions";

const SHOW_HIDE_EXP_PANEL = "SHOW_HIDE_EXP_PANEL";
const intialStateExpPanels = { openedPanels: [] };

export const showHidePanel = createAction(SHOW_HIDE_EXP_PANEL);

export const expansionPanels = handleAction(
  SHOW_HIDE_EXP_PANEL,
  (state, action) => {
    return {
      ...state,
      openedPanels: state.openedPanels.includes(action.payload)
        ? state.openedPanels.filter(panel => panel !== action.payload)
        : [...state.openedPanels, action.payload]
    };
  },
  intialStateExpPanels
);
