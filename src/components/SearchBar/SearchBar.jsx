import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log();
    //navigate to another route
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <form className="search__form" onSubmit={(e) => handleSubmit(e)}>
      <input
        id="search"
        type="search"
        placeholder="Search..."
        autoFocus
        onChange={(e) => handleChange(e)}
        className="search__input"
      />
      <button type="submit" className="search__button">
        <SearchIcon fontSize="large"></SearchIcon>
      </button>
    </form>
  );
};

export default SearchBar;
