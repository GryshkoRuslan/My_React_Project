import React from "react";

export class ExpansionPanelsLogic extends React.Component {

  state = {
    openedPanels: []
  };

  showHidePanel = selectedPanel => {
    this.setState(prevState => ({
      openedPanels: prevState.openedPanels.includes(selectedPanel)
        ? prevState.openedPanels.filter(panel => panel !== selectedPanel)
        : [...prevState.openedPanels, selectedPanel]
    }));
  };

  render() {

    const { openedPanels } = this.state;

    return (
      <React.Fragment>
        {this.props.render(openedPanels, this.showHidePanel)}
      </React.Fragment>
    );
  }
}
