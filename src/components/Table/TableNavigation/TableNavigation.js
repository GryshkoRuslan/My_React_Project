import React, { useContext } from "react";
import {
  StyledTableNavWrap,
  NavButtonWrap,
  ButtonPrevPage,
  ButtonNextPage
} from "styles/styledTableParts";
import { ThemeContext } from "contexts/themeContext";

export const TableNavigation = ({
  onClick,
  openedPage,
  rowsCount,
  firstIndex,
  lastIndex
}) => {
  const currentTheme = useContext(ThemeContext)[0];
  return (
    <StyledTableNavWrap currentTheme={currentTheme}>
      <p>
        {firstIndex + 1}-{lastIndex <= rowsCount && lastIndex} of {rowsCount}
      </p>
      <NavButtonWrap currentTheme={currentTheme} onClick={() => onClick(openedPage - 1)}>
        <ButtonPrevPage currentTheme={currentTheme}/>
      </NavButtonWrap>
      <NavButtonWrap currentTheme={currentTheme} onClick={() => onClick(openedPage + 1)}>
        <ButtonNextPage currentTheme={currentTheme} />
      </NavButtonWrap>
    </StyledTableNavWrap>
  );
}
