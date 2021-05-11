import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import firebase from "firebase";
import { db } from "./firebase";
import TodoItem from "./TodoItem";
export default function Books() {
  var user = firebase.auth().currentUser;

  const [todoText, setTodoText] = useState("");
  const [myTodos, setMyTodos] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("todos")
        .doc(user.uid)
        .onSnapshot((docsnap) => {
          if (docsnap.exists) {
            setMyTodos(docsnap.data().todos);
          }
        });
    }
  }, []);
  const addTodo = (e) => {
    e.preventDefault();
    db.collection("todos")
      .doc(user.uid)
      .set({
        todos: [...myTodos, { todo: todoText, id: uuid(), isprogress: true }],
      });
    setTodoText("");
  };
  // console.log(myTodos);
  // if user not signed in
  if (!user) {
    return <h1>Please Sign in to Continue</h1>;
  } else {
    return (
      <div className="half-background">
        &nbsp;
        <div className="todo">
          <form onSubmit={addTodo}>
            <h1>Todos</h1>
            <input
              type="text"
              placeholder="Write your todo and press enter"
              value={todoText}
              onChange={(e) => {
                setTodoText(e.target.value);
              }}
            ></input>
          </form>
          <div className="todo-list">
            {myTodos.map((todos) => {
              return <TodoItem todos={todos} user={user}></TodoItem>;
            })}
          </div>
        </div>
      </div>
    );
  }
}
