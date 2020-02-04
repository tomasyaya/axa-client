import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container } from "./styles";
import { getBrastlewark } from "../../redux/actions/actions";

const Home = ({ getBrastlewark }) => {
  useEffect(() => {
    getBrastlewark(10);
  }, []);
  return (
    <Container>
      <p>Home</p>
    </Container>
  );
};

export default connect(null, { getBrastlewark })(Home);
