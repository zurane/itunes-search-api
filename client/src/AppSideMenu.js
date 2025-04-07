function AppSideMenu({ handleLogout, setExpand, expand }) {
  // This component represents the side menu of the application.
  return (
    <div className="app-side-menu">
      <div className="side-menu-items">
        <ul>
          <li className="side-menu-item">Home</li>
          <li className="side-menu-item">Search</li>
          <li className="side-menu-item">
            <button
              onClick={() => {
                setExpand(!expand);
                console.log(expand);
              }}
            >
              Favorites
            </button>
          </li>
        </ul>
      </div>
      <div className="side-menu-footer">
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
        <div className="footer-icons">
          <a
            href="https://www.example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Support
          </a>
          <br />
          <a
            href="https://www.example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Settings
          </a>{" "}
        </div>
      </div>
    </div>
  );
}

export default AppSideMenu;
