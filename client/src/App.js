import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

const App = () => (
  <Router>
    <Fragment>
      <Navbar></Navbar>
      <Routes>
        <Route excat path="/" element={<Landing />} />
      </Routes>

      <section className="container">
        <Routes>
          <Route excat path="/register" element={<Register />} />
          <Route excat path="/login" element={<Login />} />
        </Routes>
      </section>
    </Fragment>
  </Router>
);

export default App;
