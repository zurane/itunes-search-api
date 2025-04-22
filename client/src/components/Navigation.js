import { NavLink } from "react-router-dom";

function Navigation({ handleLogout }) {
  return (
    <div className="navigation-container">
      <div className="navigation-menu">
        <ul className="navigation-list">
          <NavLink className="navigation-item" to="/">
            Home
          </NavLink>
          <NavLink to="/favorites/all" className="navigation-item">
            My Library
          </NavLink>
          <NavLink to="/contact" className="navigation-item">
            Contact us
          </NavLink>
          <NavLink to="/support" className="navigation-item">
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
