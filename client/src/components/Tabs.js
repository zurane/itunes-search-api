import { NavLink } from "react-router-dom";

function Tabs() {
  const activeStyle = {
    background: "#f0f0f0",
  };
  return (
    <div className="filters">
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to=""
        className="tab"
      >
        All
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="music"
        className="tab"
      >
        Music
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="movies"
        className="tab"
      >
        Movies
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="podcasts"
        className="tab"
      >
        Podcasts
      </NavLink>
    </div>
  );
}

export default Tabs;
