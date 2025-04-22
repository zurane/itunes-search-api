import React from "react";
import { useState, useEffect } from "react";
import { PiCaretRight } from "react-icons/pi";
import { Outlet } from "react-router-dom"; // Import Outlet for nested routes
function AllFavorites() {
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
        {favorites.length > 0 ? (
          <ul className="results-list">
            {favorites.map((item, index) => (
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
                  <PiCaretRight />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No favorites added yet.</p>
        )}
      </div>
      <Outlet />
    </>
  );
}

export default AllFavorites;
