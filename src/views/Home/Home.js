import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import debounce from "lodash.debounce";
// main components
import BrastlewarkCard from "../../components/BrastlewarkCard/BrastlewarkCard";
import { getBrastlewark, filterBrastlewark } from "../../redux/actions/actions";
import Loader from "../../components/Loader/Loader";
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/SearchBar/SearchBar";
// styles
import { Container, CardsWrapper } from "./styles";

const Home = ({
  getBrastlewark,
  filterBrastlewark,
  gnomes,
  hasNext,
  loading
}) => {
  const [page, setPage] = useState(1);
  useEffect(() => {
    getBrastlewark(page);
  }, [page]);
  const displayGnomes = !gnomes.length
    ? "No content"
    : gnomes.map(gnome => <BrastlewarkCard key={gnome.id} {...gnome} />);
  return (
    <Container>
      <SearchBar
        placeholder={"Search"}
        handleChange={debounce(name => {
          filterBrastlewark(name);
        }, 1000)}
      />
      <CardsWrapper>{loading ? <Loader /> : displayGnomes}</CardsWrapper>
      <Pagination
        page={page}
        disablePrevious={page <= 1 ? true : false}
        disableNext={hasNext ? false : true}
        handleClick={setPage}
      />
    </Container>
  );
};

const mapStateToProps = ({ brastlewark }) => ({
  gnomes: brastlewark.filteredGnomes,
  hasNext: brastlewark.hasNext,
  loading: brastlewark.loading
});

export default connect(mapStateToProps, { getBrastlewark, filterBrastlewark })(
  Home
);
