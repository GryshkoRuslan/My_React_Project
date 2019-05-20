import React, { useContext } from "react";
import { TableBodyCellStyled } from "styles/styledTableParts";
import { ThemeContext } from "contexts/themeContext";

export const TableBody = ({ data }) => {
  const [currentTheme, changeTheme] = useContext(ThemeContext);

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
