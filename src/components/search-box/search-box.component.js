import "./search-box.style.css";

export const SearchBox = ({ onSearchChange }) => (
  <input
    className="search-box"
    type="search"
    onChange={onSearchChange}
    placeholder="search monster"
  />
);
