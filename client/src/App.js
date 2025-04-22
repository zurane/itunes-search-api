import { BrowserRouter, Routes, Route } from "react-router";
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
              <Route path="/favorites/all" element={<AllFavorites />} />
              <Route path="music" element={<Music />} />
              <Route path="movies" element={<Movies />} />
              <Route path="podcasts" element={<Podcasts />} />
            </Route>
            <Route path="track/:id" element={<Overview />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </Layout>
      )}
    </BrowserRouter>
  );
}

export default App;
