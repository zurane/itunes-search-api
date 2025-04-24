import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import FavoritesPage from "./pages/FavoritesPage";
import Login from "./Login";
import Layout from "./components/Layout";
import Music from "./pages/Music";
import Movies from "./pages/Movies";
import Podcasts from "./pages/Podcasts";
import AllFavorites from "./pages/AllFavorites";
import ContactUs from "./pages/ContactUs";
import Support from "./pages/Support";
import Overview from "./pages/Overview";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  // Logs out the user by clearing the token and removing it from local storage
  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  return (
    <BrowserRouter>
      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <Layout handleLogout={handleLogout}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/favorites" element={<FavoritesPage />}>
              <Route path="all" element={<AllFavorites />} />
              <Route path="music" element={<Music />} />
              <Route path="movies" element={<Movies />} />
              <Route path="podcasts" element={<Podcasts />} />
            </Route>
            <Route path="/favorites/details/:type/:id" element={<Overview />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </Layout>
      )}
    </BrowserRouter>
  );
}

export default App;
