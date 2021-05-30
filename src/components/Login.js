import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

function SignInScreen() {
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

  if (!isSignedIn) {
    return (
      <div className="half-background">
        &nbsp;
        <div className="authContainer">
          <h1>Sign In or Register</h1>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="half-background">
          &nbsp;
          <div className="authContainer">
            <img
              className="avatar"
              src={firebase.auth().currentUser.photoURL}
              alt=""
            />
            <h1>This is your Dashboard</h1>
            <p>
              Welcome {firebase.auth().currentUser.displayName}! You are now
              signed-in!
            </p>
            <Link to="/mytodos">
              <button className="btn" style={{ marginRight: "0.7rem" }}>
                My todos
              </button>
            </Link>
            <button className="btn" onClick={() => firebase.auth().signOut()}>
              Sign-out
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default SignInScreen;
