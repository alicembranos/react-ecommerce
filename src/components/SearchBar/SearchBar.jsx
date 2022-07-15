import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css";

const SearchBar = ({ handleSubmit, handleChange, keyword }) => {
  return (
    <section className="searchContainer__section">
      <form className="search__form" onSubmit={handleSubmit}>
        <div className="search__box">
          <input
            id="search"
            type="text"
            value={keyword}
            placeholder="Search..."
            autoFocus
            onChange={handleChange}
            className="search__input"
          />
          <button type="submit" className="search__button">
            <SearchIcon fontSize="medium"></SearchIcon>
          </button>
        </div>
      </form>
    </section>
  );
};

export default SearchBar;
