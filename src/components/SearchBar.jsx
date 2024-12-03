import s from "./styles/SearchBar.module.css";
export const SearchBar = ({ setSearchQuery, searchQuery }) => {
  return (
    <>
      <div className={s.searchBarContainer}>
        <input
          type="text"
          placeholder={"Recherchez une oeuvre"}
          className={s.searchBar}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
      </div>
    </>
  );
};
