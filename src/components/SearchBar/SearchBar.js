import React from "react";
import { Input } from "./styles";

const SearchBar = ({ handleChange, placeholder }) => (
  <Input
    type="text"
    placeholder={placeholder}
    onChange={({ target }) => handleChange(target.value)}
  />
);

export default SearchBar;
