import React from "react";
import styled from "styled-components";

export const ChangeThemeButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
  margin: 0 auto;
  margin-top: 30px;
`;

export const ChangeThemeButton = styled.button`
  padding: 10px 15px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.8em;
  text-transform: uppercase;
  min-width: 64px;
  background: #e0e0e0;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2),
              0px 2px 2px 0px  rgba(0,0,0,0.14),
              0px 3px 1px -2px rgba(0,0,0,0.12);
  :focus {
    outline: none;
  }
  :hover {
    background: #d5d5d5;
  }

  :active {
    background: #9e9e9e;
  }
`;
