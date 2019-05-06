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

class Tabs extends React.Component {
  state = { selectedTabLink: tabNames.ONE };

  selectTab = tabName => {
    this.setState(state => ({
      selectedTabLink: tabName
    }));
  };

  render() {
    return (
      <StyledTabsContainer>
        <TableListCont>
          {Object.keys(tabNames).map(tabName => (
            <TabLink
              selectedtabId={this.state.selectedTabLink}
              id={tabNames[tabName]}
              key={tabNames[tabName]}
              onClick={() => this.selectTab(tabNames[tabName])}
            >
              {`ITEM ${tabName}`}
            </TabLink>
          ))}
        </TableListCont>

        {this.state.selectedTabLink === tabNames.ONE && <TabContent0 />}
        {this.state.selectedTabLink === tabNames.TWO && <TabContent1 />}
        {this.state.selectedTabLink === tabNames.THREE && <TabContent2 />}
      </StyledTabsContainer>
    );
  }
}

export default Tabs;