import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { PiCaretRight } from "react-icons/pi";

function Music() {
  // This component retrieves the favorites from local storage and displays them
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFromFavorites = (id) => {
    const updatedFavorites = favorites.filter((item) => item.trackId !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  // const viewTrack = (id) => {
  //   const track = favorites.filter((item) => item.trackId === id);
  //   console.log(track);
  //   setItem(track);
  // };

  return (
    <>
      <div className="favorites-container">
        {favorites.length > 0 &&
        favorites.some((item) => item.kind === "feature-movie") ? (
          <ul className="results-list">
            {favorites
              .filter((item) => item.kind === "feature-movie") // Filter items with kind === "song"
              .map((item, index) => (
                <li key={index}>
                 <Link to={`/track/${item.trackId}`} className="result-item">
                 <img
                    src={item.artworkUrl100}
                    alt={item.trackName}
                    className="result-image"
                  />
                  <div className="result-info">
                    <div>{item.trackName}</div>
                    <div className="artist-name">{item.artistName}</div>
                  </div>
                  <button
                    onClick={() => removeFromFavorites(item.trackId)}
                    className="delete-btn"
                  >
                    <PiCaretRight />
                  </button>
                 </Link>
                </li>
              ))}
          </ul>
        ) : (
          <p>No movies added to your favorites yet.</p>
        )}
      </div>
    </>
  );
}

export default Music;
