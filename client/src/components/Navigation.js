import { NavLink } from "react-router-dom";
import logo from "../assets/flatline-voice-icon.svg"; // Adjust the path as necessary
import { PiBooks } from "react-icons/pi";
import { PiBookmarkSimpleFill } from "react-icons/pi";

function Navigation({ handleLogout }) {
  return (
   <header className="header-container">
     <div className="navigation-container">
      <div className="navigation-header">

        <img src={logo} width={70} alt="Logo" className="logo" />
      </div>
      <div className="navigation-menu">
        <ul className="navigation-list">
          <NavLink className="navigation-item" to="/">
            Home
          </NavLink>
          <NavLink to="/contact" className="navigation-item">
            Services
          </NavLink>

          <NavLink to="/contact" className="navigation-item">
            Pricing
          </NavLink>
          <NavLink to="/support" className="navigation-item">
            Case Studies
          </NavLink>
          <NavLink to="/favorites/all" className="navigation-item special-btn">
            <span className="btn-icon"><PiBookmarkSimpleFill/>My Library</span>
          </NavLink>
        </ul>
      </div>
      <div className="navigation-user">
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </div>
   </header>
  );
}

export default Navigation;
