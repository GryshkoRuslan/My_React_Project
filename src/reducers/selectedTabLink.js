import { tabNames } from "constants/tabsConstants";

export const selectedTabLink = (state = tabNames.ONE, action) => {
  switch (action.type) {
    case 'CHANGE_ACTIVE_TAB':
      return action.selectedTab
    default:
      return state
  }
}
