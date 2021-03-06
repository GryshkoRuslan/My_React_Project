import React from "react";
import styled from "styled-components";

export const StyledTabsContainer = styled.div`
  width: 100%;
  max-width: 700px;
  min-width: 550px;
  box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.4);
  margin-top: 40px;
  margin-left: 10px;
`;

export const TableListCont = styled.div`
  background: #03a9f4;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
  position: relative;
  z-index: 3;
`;

export const TabLink = styled.div`
  display: inline-block;
  width: 110px;
  cursor: pointer;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  height: 40px;
  line-height: 40px;
  color: ${props =>
    props.selectedtabId === props.id ? "rgb(255, 255, 255)" : " #E0E0E0"};
  border-bottom: ${props =>
    props.selectedtabId === props.id
      ? "3px solid #E91E63"
      : "3px solid transparent"};
`;

export const StyledTabContent = styled.div`
  position: relative;
  z-index: 1;
  min-height: 150px;
  padding: 10px;
  background: ${({ currentTheme }) =>
    currentTheme === "lightTheme" ? "#eeeeee" : "#303030"};
`;
