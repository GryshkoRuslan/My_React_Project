import React from "react";
import { StyledTabContent } from "styles/styledTabsParts";
import { tabNames } from "constants/tabsConstants";
import { ExpansionPanels } from "containers/ExpansionPanel/ExpansionPanel";
import { ExpansionPanelsLogic } from "renderProps/ExpansionPanelsLogic";

export const TabContent0 = () => (
  <StyledTabContent id={tabNames.ONE}>
    <ExpansionPanelsLogic
      render={(openedPanels, showHidePanel) => (
        <ExpansionPanels
          openedPanels={openedPanels}
          showHidePanel={showHidePanel}
        />
      )}
    />
  </StyledTabContent>
);
