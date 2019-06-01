import { connect } from "react-redux";
import { showHidePanel } from "actions/showHidePanels";
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
    openedPanels: state.openedPanels
  }
};

const mapDispatchToProps = {
  showHidePanel: showHidePanel
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpansionPanelsLogic);
