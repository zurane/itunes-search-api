import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { PiPlayCircleFill } from "react-icons/pi";

function Overview() {
  const { type, id } = useParams();
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();
  const trackId = Number(id);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const item = favorites.find((item) => item.trackId === trackId);

  if (!item) {
    return (
      <div className="overview-container">
        <button onClick={() => navigate(-1)}>← Back</button>
        <h1>Item Not Found</h1>
        <p>Sorry, we couldn’t find a {type} with ID {id}.</p>
      </div>
    );
  }

  return (
    <div className="overview-container">
      <button onClick={() => navigate(-1)}>← Back</button>
      <h1>{item.trackName}</h1>
      <li className="result-item">
        <img
          src={item.artworkUrl100}
          alt={item.trackName}
          className="overview-result-image"
        />
        <div className="result-info">
          <div>{item.trackName}</div>
          <div className="artist-name">{item.artistName}</div>
          <div className="genre">{item.primaryGenreName}</div>
          <a
            href={item.trackViewUrl}
            rel="noreferrer"
            target="_blank"
            className="preview-btn"
          >
            <PiPlayCircleFill />
          </a>
        </div>
      </li>
    </div>
  );
}

export default Overview;
