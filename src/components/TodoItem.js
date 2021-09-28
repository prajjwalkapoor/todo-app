import React from "react";
import { db } from "./firebase";
import {
  Button,
  Container,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
export default function TodoItem({ todos, user }) {
  var docRef = db.collection("todos").doc(user.uid);

  function deleteTodo() {
    docRef.get().then((docsnap) => {
      var result = docsnap.data().todos.filter((todo) => todo.id !== todos.id);
      // console.log(result);
      docRef.update({
        todos: result,
      });
    });
  }
  const toggleIsProgress = (toggleId) => {
    docRef.get().then((docsnap) => {
      var result = docsnap
        .data()
        .todos.map((obj) =>
          obj.id === toggleId
            ? { ...obj, isprogress: obj.isprogress ? false : true }
            : obj
        );
      docRef.update({
        todos: result,
      });
    });
  };

  return (
    <div>
      <>
        <Container style={{ width: "100%", marginTop: "2.5rem" }}>
          <ListItem>
            <ListItemText
              primary={
                <Typography
                  variant="h5"
                  style={{ color: todos.color, fontWeight: "bold" }}
                >
                  {todos.text}
                </Typography>
              }
              secondary={
                todos.isprogress ? (
                  <Typography variant="body1" style={{ color: todos.color }}>
                    In Progress
                  </Typography>
                ) : (
                  <Typography variant="body1" style={{ color: todos.color }}>
                    Task Completed
                  </Typography>
                )
              }
            />
            <Button onClick={() => toggleIsProgress(todos.id)}>
              {todos.isprogress ? (
                <Typography variant="body1" style={{ color: todos.color }}>
                  Done
                </Typography>
              ) : (
                <Typography variant="body1" style={{ color: todos.color }}>
                  Undone
                </Typography>
              )}
            </Button>
            <Button onClick={deleteTodo}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill={todos.color}
                viewBox="0 0 24 24"
              >
                <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" />
              </svg>
            </Button>
          </ListItem>
        </Container>
      </>
    </div>
  );
}
