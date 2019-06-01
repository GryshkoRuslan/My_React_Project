import { combineReducers } from 'redux';
import { selectedTabLink } from 'reducers/selectedTabLink';
import { openedPanels } from 'reducers/openedPanels';

export const rootReducer = combineReducers({
  selectedTabLink,
  openedPanels
});
