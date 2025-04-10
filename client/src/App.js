import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import FavoritesPage from "./pages/FavoritesPage";
import Login from "./Login";
import Layout from "./components/Layout";

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
            <Route path='/' element={<Dashboard />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </Layout>
      )}
    </BrowserRouter>
  );
}

export default App;
