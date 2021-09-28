import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import firebase from "firebase";
import { db } from "./firebase";
import TodoItem from "./TodoItem";
import ColorPicker from "./ColorPicker";
export default function Books() {
  var user = firebase.auth().currentUser;

  const [todoText, setTodoText] = useState("");
  const [todo, setTodo] = useState({});
  const [myTodos, setMyTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isPickerVisible, setisPickerVisible] = useState(false);
  useEffect(() => {
    if (user) {
      setLoading(true);
      db.collection("todos")
        .doc(user.uid)
        .onSnapshot((docsnap) => {
          if (docsnap.exists) {
            setMyTodos(docsnap.data().todos);
          }
        });
      setLoading(false);
    }
  }, [user]);

  const addTodo = (e) => {
    db.collection("todos")
      .doc(user.uid)
      .set({
        todos: [todo, ...myTodos],
      });
    setTodoText("");
  };
  // console.log(myTodos);
  // if user not signed in
  if (!user) {
    return <h1>Please Sign in to Continue</h1>;
  } else {
    return (
      <>
        <ColorPicker
          isPickerVisible={isPickerVisible}
          addTodo={addTodo}
          todo={todo}
          setTodo={setTodo}
          setisPickerVisible={setisPickerVisible}
        />
        <div className="half-background">
          &nbsp;
          <div className="todo">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setTodo({
                  text: todoText,
                  id: uuid(),
                  isprogress: true,
                });
                setisPickerVisible(true);
              }}
            >
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
              {loading ? (
                <h3>Loading.....</h3>
              ) : myTodos.length !== 0 ? (
                myTodos.map((todos) => {
                  return <TodoItem id={todos.id} todos={todos} user={user}></TodoItem>;
                })
              ) : (
                "add todos here"
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}
