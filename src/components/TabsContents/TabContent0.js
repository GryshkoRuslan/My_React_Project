import React from "react";
import { StyledTabContent } from "styles/styledTabsParts";
import { tabNames } from "constants/tabsConstants";
import { ExpansionPanels } from "containers/ExpansionPanel/ExpansionPanel";

export const TabContent0 = () => (
  <StyledTabContent id={tabNames.ONE}>
    <ExpansionPanels />
  </StyledTabContent>
);
