import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import firebase from "firebase";
import fire from "./firebase";
export default function Navbar() {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setIsSignedIn(!!user);
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  return (
    <div className="navBar">
      <Link className="navLink" to="/">
        <h3>To-Do-Da</h3>
      </Link>
      <div className="links">
        <Link className="navLink" to="/">
          <li>Home</li>
        </Link>
        <Link className="navLink" to="/about">
          <li>About</li>
        </Link>
        <Link className="navLink" to="/contact">
          <li>Contact Me</li>
        </Link>
      </div>
      <div className="nav-btns">
        {isSignedIn ? (
          <>
            <Link className="navLink" to="/">
              <a className="btn-sec" onClick={() => firebase.auth().signOut()}>
                Logout
              </a>
            </Link>
            <Link className="navLink" to="/mytodos">
              <a className="btn-sec">My Todos</a>
            </Link>
            <Link className="navLink" to="/auth/login">
              <img
                className="avatar-small"
                src={firebase.auth().currentUser.photoURL}
                alt=""
              />
            </Link>
          </>
        ) : (
          <Link className="navLink" to="/auth/login">
            <a className="btn-sec">Login</a>
          </Link>
        )}
      </div>
    </div>
  );
}
