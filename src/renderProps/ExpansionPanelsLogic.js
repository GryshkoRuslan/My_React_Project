import { connect } from "react-redux";
import { showHidePanel } from "store/modules/expansionPanels";
import React from 'react';

const ExpansionPanelsLogic = (props) => {

  return (
    <React.Fragment>
      {props.render(props.openedPanels, props.showHidePanel)}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    openedPanels: state.expansionPanels.openedPanels
  }
};

const mapDispatchToProps = {
  showHidePanel: showHidePanel
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpansionPanelsLogic);
