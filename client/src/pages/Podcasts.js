import React, { useState, useEffect } from "react";
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

  return (
    <>
      <div className="favorites-container">
        {favorites.length > 0 && favorites.some((item) => item.kind === "podcast") ? (
          <ul className="results-list">
            {favorites
              .filter((item) => item.kind === "podcast") // Filter items with kind === "song"
              .map((item, index) => (
                <li key={index} className="result-item">
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
                    <PiCaretRight/>
                  </button>
                </li>
              ))}
          </ul>
        ) : (
          <p>No podcasts added to your favorites yet.</p>
        )}
      </div>
    </>
  );
}

export default Music;
