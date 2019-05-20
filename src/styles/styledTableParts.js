import React from "react";
import styled from "styled-components";

export const TableWrapper = styled.div`
  margin: 30px 0;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
`;

export const GridContainer = styled.div`
  border-radius: 3px;
  display: grid;
  grid-template-columns: ${props =>
    `2fr repeat(${props.columnsCount - 1}, 1fr)`};
`;

export const TableHeaderCellStyled = styled.div`
  padding: 10px;
  background: ${({ currentTheme }) =>
    currentTheme === "lightTheme" ? "#fafafa" : "#424242"};
  border-bottom: ${({ currentTheme }) =>
    currentTheme === "lightTheme"
      ? "1px solid #bdbdbd"
      : "1px solid rgba(81, 81, 81, 1)"};
  color: ${({ currentTheme }) =>
      currentTheme === "lightTheme" ? "#616161" : "#bdbdbd"};
  text-align: right;
  font-size: 12px;
  :first-child {
    text-align: left;
  }
`;

export const TableBodyCellStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
  padding: 10px;
  background: ${({ currentTheme }) =>
    currentTheme === "lightTheme" ? "#fafafa" : "#424242"};
  color: ${({ currentTheme }) =>
    currentTheme === "lightTheme" ? "black" : "#fff"};
  border-bottom: ${({ currentTheme }) =>
    currentTheme === "lightTheme"
      ? "1px solid #bdbdbd"
      : "1px solid rgba(81, 81, 81, 1)"};
  font-size: 12px;
  :nth-child(8n + 1) {
    justify-content: flex-start;
    text-align: left;
  }
`;

export const StyledTableNavWrap = styled.div`
  font-size: 12px;
  background: ${({ currentTheme }) =>
    currentTheme === "lightTheme" ? "#fafafa" : "#424242"};
  color: ${({ currentTheme }) =>
    currentTheme === "lightTheme" ? "black" : "#bdbdbd"};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const NavButtonWrap = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  :nth-child(2) {
    margin: 0 15px;
  }
  :hover {
    background: ${({ currentTheme }) =>
      currentTheme === "lightTheme" ? "#eeeeee" : "#616161"};
  }
  :active {
    background: ${({ currentTheme }) =>
      currentTheme === "lightTheme" ? "#e0e0e0" : "#757575"};
  }
`;

export const ButtonPrevPage = styled.div`
  width: 7px;
  height: 7px;
  border-right: ${({ currentTheme }) =>
    currentTheme === "lightTheme" ? "2px solid #757575" : "2px solid #bdbdbd"};
  border-top: ${({ currentTheme }) =>
    currentTheme === "lightTheme" ? "2px solid #757575" : "2px solid #bdbdbd"};
  transform: rotate(-135deg);
`;

export const ButtonNextPage = styled(ButtonPrevPage)`
  transform: rotate(45deg);
`;
