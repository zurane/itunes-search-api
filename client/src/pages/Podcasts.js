import React, { useState, useEffect } from "react";
import { PiCaretRight } from "react-icons/pi";
import { Link, Outlet } from "react-router-dom";

function Music() {
  // This component retrieves the favorites from local storage and displays them
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <>
      <div className="favorites-container">
        {favorites.length > 0 &&
        favorites.some((item) => item.kind === "podcast") ? (
          <ul className="results-list">
            {favorites
              .filter((item) => item.kind === "podcast") // Filter items with kind === "song"
              .map((item, index) => (
                <li key={index}>
                  <Link
                    to={`/favorites/details/podcasts/${item.trackId}`}
                    className="result-item"
                  >
                    <img
                      src={item.artworkUrl100}
                      alt={item.trackName}
                      className="result-image"
                    />
                    <div className="result-info">
                      <div>{item.trackName}</div>
                      <div className="artist-name">{item.artistName}</div>
                    </div>
                    <div className="delete-btn">
                      <PiCaretRight />
                    </div>
                  </Link>
                </li>
              ))}
          </ul>
        ) : (
          <p>No podcasts added to your favorites yet.</p>
        )}
      </div>
      <Outlet />
    </>
  );
}

export default Music;
