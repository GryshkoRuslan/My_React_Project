import React, { useContext } from "react";
import { StyledTabContent } from "styles/styledTabsParts";
import { Table } from "containers/Table/Table";
import { ThemeContext } from "contexts/themeContext";

export const TabContent1 = ({tableTitles, tableData}) => {
const currentTheme = useContext(ThemeContext)[0];

  return (
    <StyledTabContent currentTheme={currentTheme}>
      <Table tableTitles={tableTitles} tableData={tableData}/>
    </StyledTabContent>
  );
};
