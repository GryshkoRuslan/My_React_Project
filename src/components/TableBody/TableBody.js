import React from "react";
import { tableData } from "constants/tableConstants";
import { TableBodyCellStyled } from "styles/styledTableParts";

export const TableBody = () =>
  tableData.map((row, rowIndex) => (
    <React.Fragment key={`row ${rowIndex}`}>
      {Object.values(row).map((val, cellIndex) => (
        <TableBodyCellStyled key={`cell ${rowIndex}-${cellIndex}`}>{val}</TableBodyCellStyled>
      ))}
    </React.Fragment>
  ));
