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
import { connect } from 'react-redux';
import { changeTab } from 'store/modules/tabs';

const Tabs = (props) => {

  return (
    <ThemeContextProvider>
      <StyledTabsContainer>
        <TableListCont>
          {Object.keys(tabNames).map(tabName => (
            <TabLink
              selectedtabId={props.selectedTabLink}
              id={tabNames[tabName]}
              key={tabNames[tabName]}
              onClick={() => props.changeTab(tabNames[tabName])}
            >
              {`ITEM ${tabName}`}
            </TabLink>
          ))}
        </TableListCont>

        {props.selectedTabLink === tabNames.ONE && <TabContent0 />}
        {props.selectedTabLink === tabNames.TWO && (
          <TabContent1 tableTitles={tableTitles} tableData={tableData} />
        )}
        {props.selectedTabLink === tabNames.THREE && <TabContent2 />}
      </StyledTabsContainer>
    </ThemeContextProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedTabLink: state.tabs.selectedTabLink
  }
}

const mapDispatchToProps = {
  changeTab: changeTab
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
