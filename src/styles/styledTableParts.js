import React from "react";
import styled from "styled-components";

export const TableWrapper = styled.div`
  border-radius: 3px;
  margin: 30px 0;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  display: grid;
  grid-template: auto / 3fr 1fr 1fr repeat(4, 2fr) 1fr;

`;


export const TableHeaderCellStyled = styled.div`
 padding: 10px;
 background: #fafafa;
 border-bottom: 1px solid #bdbdbd;
 color: #616161;
 text-align: right;
 font-size: 12px;
 :first-child {
   text-align: left;
 }
`;

export const TableBodyCellStyled = styled.div`
  padding: 10px;
  background: #fafafa;
  border-bottom: 1px solid #bdbdbd;
  text-align: right;
  font-size: 12px;
    :nth-child(8n+1) {
      text-align: left;
    }
}
`;
