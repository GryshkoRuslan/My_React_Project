import React, { useContext } from "react";
import { StyledTabContent } from "styles/styledTabsParts";
import { tabNames } from "constants/tabsConstants";
import { ExpansionPanels } from "containers/ExpansionPanel/ExpansionPanel";
import { ExpansionPanelsLogic } from "renderProps/ExpansionPanelsLogic";
import { ThemeContext } from "contexts/themeContext";

export const TabContent0 = () => {
  const currentTheme = useContext(ThemeContext)[0];

  return (
    <StyledTabContent currentTheme={currentTheme}>
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
}
