import { useSelector, useDispatch } from 'react-redux';
import { showHidePanel } from "store/modules/expansionPanels";
import React from 'react';

const ExpansionPanelsLogic = (props) => {

  const openedPanels = useSelector(state => state.expansionPanels.openedPanels);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      {props.render(openedPanels, (panel) => dispatch(showHidePanel(panel)))}
    </React.Fragment>
  );
};

export default ExpansionPanelsLogic;
