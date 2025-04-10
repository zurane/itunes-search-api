import { NavLink } from "react-router-dom";

function Navigation({ handleLogout}) {
  const activeStyle = {
    color: "#ff0000",
  };

  return (
    <div className="navigation-container">
      <div className="navigation-menu">
        <ul className="navigation-list">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="navigation-item"
            to="/"
          >
            Search
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/favorites"
            className="navigation-item"
          >
            Favorites
          </NavLink>
        </ul>
      </div>
      <div className="navigation-user">
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navigation;
