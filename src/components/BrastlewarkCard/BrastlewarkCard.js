import React from "react";

import { Container, InnerContainer, InfoText, Image } from "./styles";
import useLazyLoading from "../../hooks/useLazyLoading";

const BrastlewarkCard = ({ name, image, gender }) => {
  const [show, element] = useLazyLoading();
  return (
    <Container ref={element}>
      {show && (
        <InnerContainer>
          <Image src={image} />
          <InfoText>{name}</InfoText>
          <InfoText>{gender}</InfoText>
        </InnerContainer>
      )}
    </Container>
  );
};

export default BrastlewarkCard;
