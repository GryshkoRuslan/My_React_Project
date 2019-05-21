import React, { useContext } from "react";
import { TableBodyCellStyled } from "styles/styledTableParts";
import { ThemeContext } from "contexts/themeContext";

export const TableBody = ({ data }) => {
  const currentTheme = useContext(ThemeContext)[0];

  return data.map((row, rowIndex) => (
    <React.Fragment key={`row ${rowIndex}`}>
      {Object.values(row).map((val, cellIndex) => (
        <TableBodyCellStyled
          currentTheme={currentTheme}
          key={`cell ${rowIndex}-${cellIndex}`}
        >
          {val}
        </TableBodyCellStyled>
      ))}
    </React.Fragment>
  ));
};
