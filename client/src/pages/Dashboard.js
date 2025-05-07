import React, { useEffect, useState } from "react";
import axios from "axios";
import Login from "../Login";
import { PiPlusCircle } from "react-icons/pi";
import "../App.css";
import LinearProgress from "@mui/joy/LinearProgress";
import SearchBar from "../components/SearchBar";

function Dashboard() {
  const [term, setTerm] = useState("");
  const [media, setMedia] = useState("all");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });
  const [error, setError] = useState("");

  const addFavorite = (item) => {
    if (!favorites.some((fav) => fav.trackId === item.trackId)) {
      setFavorites([...favorites, item]); // just update state
      console.log("Added to favorites:", item);
    }
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Function to search for music, movies, etc.
  const search = async () => {
    if (!token) {
      alert("Please log in first.");
      return;
    }
    console.log("Token being sent:", token); // Debugging log
    setLoading(true);
    setError("");
    try {
      const response = await axios.get("http://localhost:5000/search", {
        headers: { Authorization: `Bearer ${token}` }, // Correct JWT format
        params: { term, media },
      });
      console.log("Response data:", response.data); // Debug log
      setResults(response.data.results);
    } catch (err) {
      console.error(
        "Error fetching data:",
        err.response ? err.response.data : err.message
      );
      setError("Failed to fetch results. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        {!token ? (
          <Login setToken={setToken} />
        ) : (
          <>
            <SearchBar
              term={term}
              media={media}
              setMedia={setMedia}
              setTerm={setTerm}
              search={search}
            />

            {loading && (
              <LinearProgress color="neutral" size="sm" thickness={1} />
            )}
            {error && <span className="error-message">{error}</span>}

            <div className="results-container">
              <article className="search-feed">
                <ul className="results-list">
                  {results.length > 0
                    ? results.map((item, index) => (
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
                            onClick={() => addFavorite(item)}
                            className="fav-btn"
                          >
                            <PiPlusCircle />
                          </button>
                        </li>
                      ))
                    : !loading && (
                        <p className="no-results">No results found.</p>
                      )}
                </ul>
              </article>
            </div>
          </>
        )}
      </div>
      {/* Favorite list container widget */}
    </>
  );
}

export default Dashboard;
