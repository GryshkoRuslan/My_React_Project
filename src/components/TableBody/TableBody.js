import React from "react";
import { tableData } from "constants/tableConstants";
import { TableRowStyled, TableBodyCellStyled } from "styles/styledTableParts";

export const TableBody = () =>
  tableData.map(row => (
    <TableRowStyled>
      {Object.values(row).map(val => (
        <TableBodyCellStyled>{val}</TableBodyCellStyled>
      ))}
    </TableRowStyled>
  ));
