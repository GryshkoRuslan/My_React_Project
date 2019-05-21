import React, { useContext } from "react";
import { TableHeaderCellStyled } from "styles/styledTableParts";
import { ThemeContext } from "contexts/themeContext";

export const TableHeader = ({ titles }) => {
  const currentTheme = useContext(ThemeContext)[0];

  return (
    <React.Fragment>
      {titles.map(title => (
        <TableHeaderCellStyled currentTheme={currentTheme} key={title}>
          {title}
        </TableHeaderCellStyled>
      ))}
    </React.Fragment>
  );
};
