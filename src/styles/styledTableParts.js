import React from "react";
import styled from "styled-components";

export const TableWrapper = styled.div`
  margin: 30px 0;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.3);
  border-radius: 3px;

`;

export const TableHeaderStyled = styled.div`
border-radius: 3px;
padding: 15px;
background: #fafafa;
border-bottom: 1px solid #bdbdbd;
display: grid;
grid-template: auto / 1fr 1fr 1fr repeat(4, 2fr) 1fr;
`;

export const TableHeaderCellStyled = styled.div`
 color: #616161;
 text-align: right;
 font-size: 12px;
 :nth-child(1) {
   text-align: left;
 }
`;

export const TableRowStyled = styled.div`
  padding: 15px;
  background: #fafafa;
  border-bottom: 1px solid #bdbdbd;
  display: grid;
  grid-template: auto / 1fr 1fr 1fr repeat(4, 2fr) 1fr;
`;

export const TableBodyCellStyled = styled.div`
  text-align: right;
  font-size: 12px;
  :nth-child(1) {
    text-align: left;
}
`;
