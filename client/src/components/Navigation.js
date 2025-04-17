import { NavLink } from "react-router-dom";

function Navigation({ handleLogout}) {
  const activeStyle = {
    color: "#ff375f",
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
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/favorites"
            className="navigation-item"
          >
            My Library
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/contact"
            className="navigation-item"
          >
            Contact us
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/support"
            className="navigation-item"
          >
            Support
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
