import React from "react";
import {
  StyledWraperExpPanel,
  ExpPanelContainer,
  ExpPanelLabel
} from "styles/styledExpPanelsParts";
import { ExpPanelContent0 } from "components/expPansContents/expPanelContent0";
import { ExpPanelContent1 } from "components/expPansContents/expPanelContent1";
import { ExpPanelContent2 } from "components/expPansContents/expPanelContent2";
import { expPanelAttrs } from "constants/expPanelConstants";

export class ExpansionPanels extends React.Component {
  state = {
    panelOneIsOpended: false,
    panelTwoIsOpended: false,
    panelThreeIsOpended: false
  };
  ShowHidePanel = selectedPanel => {
    this.setState(prevState => ({
      [selectedPanel]: !prevState[selectedPanel]
    }));
  };

  render() {
    return (
      <StyledWraperExpPanel>
        {expPanelAttrs.map(attr => (
          <ExpPanelContainer isOpened={this.state[attr.stateName]}>
            <ExpPanelLabel
              isOpened={this.state[attr.stateName]}
              onClick={() => this.ShowHidePanel(attr.stateName)}
            >
              <span>{attr.panelName}</span>
            </ExpPanelLabel>
            {this.state[attr.stateName] === true && <ExpPanelContent0 />}
          </ExpPanelContainer>
        ))}
      </StyledWraperExpPanel>
    );
  }
}
