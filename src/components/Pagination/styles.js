import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  align-self: center;
`;
export const Button = styled.button`
  padding: 10px;
  margin: 10px;
  border: none;
  background: none;
  :disabled svg {
    color: gray !important;
  }
`;

export const Arrow = styled(FontAwesomeIcon)`
  color: purple;
  font-size: 20px;
`;
