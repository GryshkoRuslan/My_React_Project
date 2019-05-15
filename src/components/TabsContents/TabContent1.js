import React from "react";
import { StyledTabContent } from "styles/styledTabsParts";
import { Table } from "containers/Table/Table"

export const TabContent1 = ({tableTitles, tableData}) => (
  <StyledTabContent>
    <Table tableTitles={tableTitles} tableData={tableData}/>
  </StyledTabContent>
);
