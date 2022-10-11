import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Setting from "./pages/setting/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Register from "./pages/register/Register";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";

function App() {
  const user = false
  return (
    <Router>
      <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/write" element={<Write />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/post/:postId" element={<Single />} />
        </Routes>
    </Router>
  );
}

export default App;
