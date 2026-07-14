import "./App.css";
import { Routes, Route } from "react-router-dom";

import Nav from "./Nav";
import Mainpage from "./Mainpage";
import Home from "./Home";
import Orders from "./Orders";
import Wishlist from "./Wishlist";
import Profile from "./Profile";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/categories" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;