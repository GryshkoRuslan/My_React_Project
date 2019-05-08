import React from "react";
import { tableTitles,  tableData } from "constants/tableConstants";
import { TableHeaderCellStyled } from "styles/styledTableParts";

export const TableHeader = () => (
  <React.Fragment>
    {tableTitles.map(title => (
      <TableHeaderCellStyled key={title}>{title}</TableHeaderCellStyled>
    ))}
  </React.Fragment>

);
