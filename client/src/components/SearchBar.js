import { PiMagnifyingGlass } from "react-icons/pi";

function SearchBar({ term, setTerm, media, setMedia, search }) {
  return (
    <div className="search-container">
      <p>Discover the Entertainment You Love – Music, Movies & More</p>
      <div className="search-bar">
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Find music, movies, and podcasts that you like"
          className="search-input"
        />
        <div className="search-left">
          <select
            value={media}
            onChange={(e) => setMedia(e.target.value)}
            className="search-select"
          >
            <option value="all">Show All</option>
            <option value="music">Music</option>
            <option value="movie">Movies</option>
            <option value="podcast">Podcasts</option>
          </select>

          <button onClick={search} className="search-button">
            <PiMagnifyingGlass />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
