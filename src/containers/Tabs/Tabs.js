import React from "react";
import {
  StyledTabsContainer,
  TableListCont,
  TabLink
} from "styles/styledTabsParts";
import { tabNames } from "constants/tabsConstants";
import { TabContent0 } from "components/TabsContents/TabContent0";
import { TabContent1 } from "components/TabsContents/TabContent1";
import { TabContent2 } from "components/TabsContents/TabContent2";
import { tableTitles, tableData } from "constants/tableConstants";
import { themes } from "constants/themeConstants";
import { addTabsLogic } from "hocs/tabsLogic";
import { ThemeContext } from "contexts/themeContext";

const Tabs = ({
  selectedTabLink,
  tabNames,
  selectTab,
  currentTheme,
  changeTheme
}) => {
  return (
    <ThemeContext.Provider value={[currentTheme, changeTheme]}>
      <StyledTabsContainer>
        <TableListCont>
          {Object.keys(tabNames).map(tabName => (
            <TabLink
              selectedtabId={selectedTabLink}
              id={tabNames[tabName]}
              key={tabNames[tabName]}
              onClick={() => selectTab(tabNames[tabName])}
            >
              {`ITEM ${tabName}`}
            </TabLink>
          ))}
        </TableListCont>

        {selectedTabLink === tabNames.ONE && <TabContent0 />}
        {selectedTabLink === tabNames.TWO && (
          <TabContent1 tableTitles={tableTitles} tableData={tableData} />
        )}
        {selectedTabLink === tabNames.THREE && <TabContent2 />}
      </StyledTabsContainer>
    </ThemeContext.Provider>
  );
};

const TabsWithLogic = addTabsLogic(Tabs, tabNames, themes);

export default TabsWithLogic;
