import React from 'react';


export const addTabsLogic = (WrappedCompoment, tabNames) => {
  return class TabsLogic extends React.Component {
    state = { selectedTabLink: tabNames.ONE };

    selectTab = tabName => {
      this.setState(state => ({
        selectedTabLink: tabName
      }));
    };

    render() {
      return (
        <WrappedCompoment
          selectedTabLink={this.state.selectedTabLink}
          tabNames={tabNames}
          selectTab={this.selectTab}
        />
      );
    }
  };
};
