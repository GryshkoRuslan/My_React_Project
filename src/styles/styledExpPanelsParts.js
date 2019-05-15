import React from "react";
import styled from "styled-components";

export const StyledWraperExpPanel = styled.div`
  width: 80%;
  margin: 20px auto;
`;

export const ExpPanelContainer = styled.div`
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
  background: #ffffff;
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
    border-right: 2px solid #757575;
    border-top: 2px solid #757575;
    transform: ${props =>
      props.isOpened ? "rotate(-45deg)" : "rotate(135deg)"};
    position: relative;
    bottom: ${props => props.isOpened ? "" : "2px"};
  }
`;
