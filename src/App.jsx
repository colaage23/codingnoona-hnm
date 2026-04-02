import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./page/Login";
import ProductAll from "./page/ProductAll";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <div>
      <Navbar
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
      />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticated={setAuthenticated} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticated={authenticated} />}
        />
      </Routes>
    </div>
  );
}

export default App;
