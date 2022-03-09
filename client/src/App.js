import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alert";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";
import ProfileForm from "./components/profile-forms/ProfileForm";
import AddExperience from "./components/profile-forms/AddExperience";
import AddEducation from "./components/profile-forms/AddEducation";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profile/Profile";
import Posts from "./components/posts/Posts";
import Post from "./components/post/Post";
import NotFound from "./components/layout/NotFound";

import { loadUser } from "./actions/auth";
import { setAuthToken } from "./utils/setAuthToken";

const App = () => {
  useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token) {
      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.token);
    }
    // try to fetch a user, if no token or invalid token we
    // will get a 401 response from our API
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar></Navbar>
          <Routes>
            <Route excat path="/" element={<Landing />} />
          </Routes>

          <section className="container">
            <Alert></Alert>
            <Routes>
              <Route excat path="/register" element={<Register />} />
              <Route excat path="/login" element={<Login />} />
              <Route path="profiles" element={<Profiles />} />
              <Route path="profile/:id" element={<Profile />} />
              <Route
                excat
                path="/dashboard"
                element={<PrivateRoute component={Dashboard} />}
              />
              <Route
                excat
                path="/create-profile"
                element={<PrivateRoute component={ProfileForm} />}
              />
              <Route
                path="edit-profile"
                element={<PrivateRoute component={ProfileForm} />}
              />
              <Route
                path="add-experience"
                element={<PrivateRoute component={AddExperience} />}
              />
              <Route
                path="add-education"
                element={<PrivateRoute component={AddEducation} />}
              />
              <Route
                path="posts"
                element={<PrivateRoute component={Posts} />}
              />
              <Route
                path="posts/:id"
                element={<PrivateRoute component={Post} />}
              />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
