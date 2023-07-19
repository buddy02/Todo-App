import "./App.css";
import AddTodo from "./AddTodo";
import GetTodo from "./GetTodo";
import { useState } from "react";
import { Card, Typography } from "@mui/material";
function App() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <Typography
        style={{
          marginTop: 100,
          color: "#cbced4",
          fontFamily: "initial",
          fontWeight: "bold",
          marginBottom: 10,
        }}
        textAlign={"center"}
        variant="h4"
      >
        Todo List
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <AddTodo todos={todos} setTodos={setTodos} />
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <GetTodo todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
}

export default App;
