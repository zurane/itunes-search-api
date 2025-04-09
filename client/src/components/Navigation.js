import { NavLink } from "react-router";

function Navigation({ handleLogout }) {
  const activeStyle = {
    color: "#ff0000",
  };

  return (
    <div className="navigation-container">
      <div className="navigation-menu">
        <ul className="navigation-list">
          <NavLink
            style={(isActive) => (isActive ? activeStyle : "")}
            className="navigation-item"
          >
            Search
          </NavLink>
          <NavLink className="navigation-item">Favorites</NavLink>
          <NavLink className="navigation-item">Contact</NavLink>
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
