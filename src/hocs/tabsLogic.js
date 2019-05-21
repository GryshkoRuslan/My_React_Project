import React, { useState } from "react";

export const addTabsLogic = (WrappedCompoment, tabNames) => {

  const TabsLogic = () => {

    const [ selectedTabLink, changeTabLink ] = useState(tabNames.ONE);
    const selectTab = tabName => (
      changeTabLink(tabName)
    );

    return (
        <WrappedCompoment
          selectedTabLink={selectedTabLink}
          tabNames={tabNames}
          selectTab={selectTab}
        />
      );
  };
  return TabsLogic
};
