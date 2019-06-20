import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { showHidePanel } from "store/modules/expansionPanels";
import React from "react";

const ExpansionPanelsLogic = props => {

  const openedPanels = useSelector(state => state.expansionPanels.openedPanels);
  const dispatch = useDispatch();

  // const handleShowHidePanel = useCallback(
  //   panel => dispatch(showHidePanel(panel)),
  //   [dispatch]
  // );

  const handleShowHidePanel = panel => dispatch(showHidePanel(panel));

  return (
    <React.Fragment>
      {props.render(openedPanels, handleShowHidePanel)}
    </React.Fragment>
  );
};

export default ExpansionPanelsLogic;
