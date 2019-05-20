import React, { useState } from "react";

export const addTabsLogic = (WrappedCompoment, tabNames, themes) => {

  const TabsLogic = () => {

    const [ selectedTabLink, changeTabLink ] = useState(tabNames.ONE);
    const [currentTheme, setTheme] = useState(themes.LIGHT);

    const selectTab = tabName => (
      changeTabLink(tabName)
    );

    const changeTheme = (e) => (
      setTheme(e.target.value)
    );

    return (
        <WrappedCompoment
          selectedTabLink={selectedTabLink}
          tabNames={tabNames}
          selectTab={selectTab}
          currentTheme={currentTheme}
          changeTheme={changeTheme}
        />
      );
  };
  return TabsLogic
};
