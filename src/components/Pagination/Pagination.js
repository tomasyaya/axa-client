import React from "react";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { Button, Container, Arrow } from "./styles";

const Pagination = ({ disablePrevious, disableNext, page, handleClick }) => (
  <Container>
    <Button
      type="button"
      disabled={disablePrevious}
      onClick={() => handleClick(page - 1)}
    >
      <Arrow icon={faArrowLeft} />
    </Button>
    <Button
      type="button"
      disabled={disableNext}
      onClick={() => handleClick(page + 1)}
    >
      <Arrow icon={faArrowRight} />
    </Button>
  </Container>
);

export default Pagination;
