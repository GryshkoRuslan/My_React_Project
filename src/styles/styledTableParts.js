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
  grid-template-columns: ${props => `2fr repeat(${props.columnsCount - 1}, 1fr)`};
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
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
  padding: 10px;
  background: #fafafa;
  border-bottom: 1px solid #bdbdbd;
  font-size: 12px;
    :nth-child(8n+1) {
      justify-content: flex-start;
      text-align: left;
    }
}
`;

export const StyledTableNavWrap = styled.div`
  font-size: 12px;
  color: #616161;
  border-radius: 4px;
  background: #fafafa;
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
      background: #eeeeee;
    }
    :active {
      background: #e0e0e0;
}
`;

export const ButtonPrevPage = styled.div`
  width: 7px;
  height: 7px;
  border-right: 2px solid #757575;
  border-top: 2px solid #757575;
  transform: rotate(-135deg);
`;

export const ButtonNextPage = styled(ButtonPrevPage)`
  transform: rotate(45deg);
`;
