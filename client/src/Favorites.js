import { PiMinusLight, PiCaretCircleDownThin } from "react-icons/pi";

function Favorites({ favorites, removeFromFavorites, expand, setExpand }) {
  return (
    <div
      style={{ width: expand ? "40%" : "0" }}
      className="favorites-container"
    >
      <div className="fav-header">
        <span className="fav-heading">My Favorites ({favorites.length})</span>
        <div>
          <button onClick={() => setExpand(!expand)} className="expand-btn">
            {expand ? <PiMinusLight /> : <PiCaretCircleDownThin />}
          </button>
        </div>
      </div>
      <ul className="favorites-list">
        {favorites.map((item) => (
          <li key={item.trackId} className="fav-result-item">
            <img
              src={item.artworkUrl100}
              alt={item.trackName}
              className="fav-result-image"
            />
            <div>
              <span className="fav-track-name">{item.trackName}</span> <br />
              <span className="fav-artist-name">{item.artistName}</span>
            </div>
            <button
              className="fav-del-btn"
              onClick={() => removeFromFavorites(item.trackId)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;
