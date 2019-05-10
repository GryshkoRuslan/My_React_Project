import React from "react";
import { TableHeaderCellStyled } from "styles/styledTableParts";

export const TableHeader = ({titles}) => (
  <React.Fragment>
    {titles.map(title => (
      <TableHeaderCellStyled key={title}>{title}</TableHeaderCellStyled>
    ))}
  </React.Fragment>

);
