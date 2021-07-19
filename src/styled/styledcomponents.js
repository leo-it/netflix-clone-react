import styled from "styled-components";
import { InputBase } from "@material-ui/core";

export const NetflixInput = styled(InputBase)`
  z-index: 30;
  background: #fff;
  padding: 25.5px;
  height: 30px;
  border-radius: 5px;
  border: none;
`;

export const NetflixButton = styled.button`
  color: #fff;
  border-radius: 5px;
  text-transform: inherit;
  padding: 15px;
  font-size: 1.1rem;
  background-color: red;
  z-index: 15;
  outline: none;
  cursor: pointer;
`;
