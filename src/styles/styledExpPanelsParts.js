import React from "react";
import styled from "styled-components";

export const StyledWraperExpPanel = styled.div`
  width: 80%;
  margin: 20px auto;
`;

export const ExpPanelContainer = styled.div`
  padding: 10px;
  background: ${({ currentTheme }) =>
    currentTheme === "lightTheme" ? "#fafafa" : "#424242"};
  color: ${({ currentTheme }) =>
    currentTheme === "lightTheme" ? "black" : "#fff"};
  border-bottom: ${({ currentTheme }) =>
    currentTheme === "lightTheme"
      ? "1px solid #bdbdbd"
      : "1px solid rgba(81, 81, 81, 1)"};
  box-shadow: ${props =>
    props.isOpened
      ? "0 1px 1px 1px rgba(0, 0, 0, 0.3)"
      : "0 1px 1px 0 rgba(0, 0, 0, 0.3)"};
  margin: ${props => props.isOpened === true ? "15px 0" : ""};
`;

export const ExpPanelLabel = styled.div`
  display: flex;
  min-height: 25px;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;

  ::after {
    content: "";
    display: inline-block;
    width: 7px;
    height: 7px;
    border-right: ${({ currentTheme }) =>
      currentTheme === "lightTheme" ? "2px solid #757575" : "2px solid #bdbdbd"};
    border-top: ${({ currentTheme }) =>
      currentTheme === "lightTheme" ? "2px solid #757575" : "2px solid #bdbdbd"};
    transform: ${props =>
      props.isOpened ? "rotate(-45deg)" : "rotate(135deg)"};
    position: relative;
    bottom: ${props => props.isOpened ? "" : "2px"};
  }
`;
