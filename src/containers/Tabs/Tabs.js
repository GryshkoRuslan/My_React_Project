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
import { ThemeContextProvider } from "contexts/themeContext";
import { useSelector, useDispatch } from 'react-redux';
import { changeTab } from 'store/modules/tabs';

const Tabs = () => {

  const selectedTabLink = useSelector(state => state.tabs.selectedTabLink);
  const dispatch = useDispatch();


  return (
    <ThemeContextProvider>
      <StyledTabsContainer>
        <TableListCont>
          {Object.keys(tabNames).map(tabName => (
            <TabLink
              selectedtabId={selectedTabLink}
              id={tabNames[tabName]}
              key={tabNames[tabName]}
              onClick={() => dispatch(changeTab(tabNames[tabName]))}
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
    </ThemeContextProvider>
  );
};

export default Tabs;
