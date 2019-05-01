import React from "react";
import "containers/tabs/tabs_style.css";
import { TableListCont, TabLink } from "styles/styled_tabs_parts.js";
import { tabLinksInf } from "constants/tabs_constants.js";
import TabContent0 from "components/tabs_contents/TabContent0.js";
import TabContent1 from "components/tabs_contents/TabContent1.js";
import TabContent2 from "components/tabs_contents/TabContent2.js";

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { SelectedTabLink: "first-content" };
    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(id) {
    this.setState(state => ({
      SelectedTabLink: id
    }));
  }

  render() {
    return (
      <div className="tabs">
        <TableListCont>
          {tabLinksInf.map(item => (
            <TabLink
              SelectedtabId={this.state.SelectedTabLink}
              id={item["id"]}
              key={item["id"]}
              onClick={() => this.selectTab(item["id"])}
            >
              {item["name"]}
            </TabLink>
          ))}
        </TableListCont>

        {this.state.SelectedTabLink === "first-content" && (
          <TabContent0>Item One</TabContent0>
        )}
        {this.state.SelectedTabLink === "second-content" && (
          <TabContent1>Item Two</TabContent1>
        )}
        {this.state.SelectedTabLink === "third-content" && (
          <TabContent2>Item Three</TabContent2>
        )}
      </div>
    );
  }
}

export default Tabs;
