import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Overview() {
  const { id } = useParams(); // Get the track ID from the URL (comes as a string)
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className="overview-container">
      <h1>Overview</h1>

      {favorites
        .filter((item) => item.trackId === Number(id)) // Convert id to number for comparison
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
          </li>
        ))}
    </div>
  );
}
export default Overview;
