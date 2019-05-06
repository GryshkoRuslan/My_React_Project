import React from "react";
import { tableTitles,  tableData } from "constants/tableConstants";
import { TableHeaderStyled, TableHeaderCellStyled } from "styles/styledTableParts";

export const TableHeader = () => (
  <TableHeaderStyled>
    {tableTitles.map(title => (
      <TableHeaderCellStyled>{title}</TableHeaderCellStyled>
    ))}
  </TableHeaderStyled>

);
