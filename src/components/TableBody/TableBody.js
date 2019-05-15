import React from "react";
import { TableBodyCellStyled } from "styles/styledTableParts";

export const TableBody = ({data}) =>
  data.map((row, rowIndex) => (
    <React.Fragment key={`row ${rowIndex}`}>
      {Object.values(row).map((val, cellIndex) => (
        <TableBodyCellStyled key={`cell ${rowIndex}-${cellIndex}`}>{val}</TableBodyCellStyled>
      ))}
    </React.Fragment>
  ));
