import React from "react";
import {
  StyledWraperExpPanel,
  ExpPanelContainer,
  ExpPanelLabel
} from "styles/styledExpPanelsParts";
import { expPanelAttrs } from "constants/expPanelConstants";

export class ExpansionPanels extends React.Component {
  state = {
    panelOneIsOpended: false,
    panelTwoIsOpended: false,
    panelThreeIsOpended: false
  };

  showHidePanel = selectedPanel => {
    this.setState(prevState => ({
      [selectedPanel]: !prevState[selectedPanel]
    }));
  };

  render() {
    return (
      <StyledWraperExpPanel>
        {expPanelAttrs.map(attr => (
          <ExpPanelContainer
            key={attr.panelName}
            isOpened={this.state[attr.stateName]}
          >
            <ExpPanelLabel
              isOpened={this.state[attr.stateName]}
              onClick={() => this.showHidePanel(attr.stateName)}
            >
              <span>{attr.panelName}</span>
            </ExpPanelLabel>
            {this.state[attr.stateName] && <attr.contentName />}
          </ExpPanelContainer>
        ))}
      </StyledWraperExpPanel>
    );
  }
}
