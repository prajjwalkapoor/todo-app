import React from "react";
import firebase from "firebase";

export default function Books() {
  var user = firebase.auth().currentUser;

  if (!user) {
    return <h1>Please Sign in to Continue</h1>;
  } else {
    // No user is signed in.

    return (
      <div className="half-background">
        &nbsp;
        <div className="todo">
          <h1>Todos</h1>
          <input
            type="text"
            placeholder="Write your todo and press enter"
          ></input>
          <div className="todo-list">&nbsp;</div>
        </div>
      </div>
    );
  }
}
