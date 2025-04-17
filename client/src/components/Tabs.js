import { NavLink } from "react-router-dom";

function Tabs() {

  return (
    <div className="filters">
      <NavLink
        to=""
        className='tab'
      >
        All
      </NavLink>
      <NavLink
        to="music"
        className={({ isActive }) => `tab${isActive ? " tab-active" : ""}`}
      >
        Music
      </NavLink>
      <NavLink
        to="movies"
        className={({ isActive }) => `tab${isActive ? " tab-active" : ""}`}
      >
        Movies
      </NavLink>
      <NavLink
        to="podcasts"
        className={({ isActive }) => `tab${isActive ? " tab-active" : ""}`}
      >
        Podcasts
      </NavLink>
    </div>
  );
}

export default Tabs;
