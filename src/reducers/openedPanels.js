export const openedPanels = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_HIDE_EXP_PANEL':
      if (state.includes(action.selectedPanel)) {
        return state.filter(panel => panel !== action.selectedPanel)
      } else {
        return [...state, action.selectedPanel]
      }
    default:
      return state
  }
}
