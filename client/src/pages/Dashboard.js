import React, { useState } from "react";
import axios from "axios";
import Login from "../Login";
import { PiPlusCircle } from "react-icons/pi";
import "../App.css";
import LinearProgress from "@mui/joy/LinearProgress";
import SearchBar from "../components/SearchBar";
import Navigation from "../components/Navigation";

function Dashboard() {
  const [term, setTerm] = useState("");
  const [media, setMedia] = useState("all");
  const [results, setResults] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [loading, setLoading] = useState(false);
  const [expand, setExpand] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState("");

  const addFavorite = (item) => {
    // Check if the item is already in the favorites list
    if (!favorites.some((fav) => fav.trackId === item.trackId)) {
      // If not, add the item to the list by updating the state
      setFavorites([...favorites, item]);
    }
  };

  //   const removeFromFavorites = (id) => {
  //     setFavorites(favorites.filter((item) => item.trackId !== id));
  //   };

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

  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  return (
    <>
      {/* <AppSideMenu
        handleLogout={handleLogout}
        expand={expand}
        setExpand={setExpand}
      /> */}
      <div className="app-container">
        {!token ? (
          <Login setToken={setToken} />
        ) : (
          <>
            <Navigation handleLogout={handleLogout} />
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
                : !loading && <p className="no-results">No results found.</p>}
            </ul>
          </>
        )}
      </div>
      {/* Favorite list container widget */}
      {/* {token ? (
        <Favorites
          expand={expand}
          setExpand={setExpand}
          removeFromFavorites={removeFromFavorites}
          favorites={favorites}
        />
      ) : null} */}
    </>
  );
}

export default Dashboard;
