import React from "react";
import { db } from "./firebase";
import { Button, Container, ListItem, ListItemText } from "@material-ui/core";
export default function TodoItem({ todos, user }) {
  function toggleIsProgress() {
    // db.collection("todos").doc(id).update({
  }

  function deleteTodo(deletetodo) {
    var docRef = db.collection("todos").doc(user.uid);
    docRef.get().then((docsnap) => {
      var result = docsnap.data().todos.filter((todo) => todo !== deletetodo);
      docRef.update({
        todos: result,
      });
    });
  }
  return (
    <div>
      <>
        <Container style={{ width: "100%", marginTop: "2.5rem" }}>
          <ListItem>
            <ListItemText
              primary={todos}
              //   secondary={todos.isprogress ? "In Progress" : "Tast Completed"}
            />
            {/* <Button onClick={toggleIsProgress}>
              {todos.isprogress ? "Done" : "Undone"}
            </Button> */}
            <Button onClick={deleteTodo}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
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
