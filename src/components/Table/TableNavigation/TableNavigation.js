import React from "react";
import {
  StyledTableNavWrap,
  NavButtonWrap,
  ButtonPrevPage,
  ButtonNextPage
} from "styles/styledTableParts";

export const TableNavigation = ({
  onClick,
  openedPage,
  rowsCount,
  firstIndex,
  lastIndex
}) => (
  <StyledTableNavWrap>
    <p>
      {firstIndex + 1}-{lastIndex <= rowsCount && lastIndex} of {rowsCount}
    </p>
    <NavButtonWrap onClick={() => onClick(openedPage - 1)}>
      <ButtonPrevPage />
    </NavButtonWrap>
    <NavButtonWrap onClick={() => onClick(openedPage + 1)}>
      <ButtonNextPage />
    </NavButtonWrap>
  </StyledTableNavWrap>
);
