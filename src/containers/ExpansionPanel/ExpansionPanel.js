import React from "react";
import {
  StyledWraperExpPanel,
  ExpPanelContainer,
  ExpPanelLabel
} from "styles/styledExpPanelsParts";
import { ExpPanelContent0 } from "components/ExpPansContents/ExpPanelContent0";
import { ExpPanelContent1 } from "components/ExpPansContents/ExpPanelContent1";
import { ExpPanelContent2 } from "components/ExpPansContents/ExpPanelContent2";
import { expPanelAttrs } from "constants/expPanelConstants";



export const ExpansionPanels = (props) => {

    const { openedPanels, showHidePanel } = props;

    return (
      <StyledWraperExpPanel>
        {expPanelAttrs.map(attr => (
          <ExpPanelContainer
            key={attr.panelName}
            isOpened={openedPanels.includes(attr.stateName)}
          >
            <ExpPanelLabel
              isOpened={openedPanels.includes(attr.stateName)}
              onClick={() => showHidePanel(attr.stateName)}
            >
              <span>{attr.panelName}</span>
            </ExpPanelLabel>
            {attr.panelName === "Expansion Panel 1" &&
              openedPanels.includes(attr.stateName) && <ExpPanelContent0 />}
            {attr.panelName === "Expansion Panel 2" &&
              openedPanels.includes(attr.stateName) && <ExpPanelContent1 />}
            {attr.panelName === "Expansion Panel 3" &&
              openedPanels.includes(attr.stateName) && <ExpPanelContent2 />}
          </ExpPanelContainer>
        ))}
      </StyledWraperExpPanel>
    );
}
