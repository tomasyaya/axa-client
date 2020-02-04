import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  text-align: center;
  min-height: 300px;
  margin: 10px;
`;

const showAnimtion = keyframes`
  0% {
    opacity: 0 
  }
  50% {
    opacity: 0.6
  }
  100% {
    opacity: 1
  }
`;

export const InnerContainer = styled.div`
  animation: ${showAnimtion} 1s ease-in;
  box-shadow: -2px 4px 5px 0px rgba(0, 0, 0, 0.25);
  padding: 10px;
  border-radius: 5px;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 5px;
`;

export const InfoText = styled.p``;
