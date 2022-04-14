import "./style.css";
import { useState } from "react";
const SearchBar = ({ validateSearch }) => {
  const [search, setSearch] = useState("");
  return (
    <div className="search-bar">
      <form
        onSubmit={(e) => {
          validateSearch(e, search);
        }}
      >
        <input
          type="text"
          placeholder="Votre recherche "
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
