import React from "react";
import styled from "styled-components";

export const TableListCont = styled.div`
  background: #03a9f4;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
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
    props.SelectedtabId === props.id ? "rgb(255, 255, 255)" : " #E0E0E0"};
  border-bottom: ${props =>
    props.SelectedtabId === props.id
      ? "3px solid #E91E63"
      : "3px solid transparent"};
`;
