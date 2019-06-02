import { combineReducers } from 'redux';
import { tabs } from 'store/modules/tabs';
import { expansionPanels } from 'store/modules/expansionPanels';

export const rootReducer = combineReducers({
  tabs,
  expansionPanels
});
