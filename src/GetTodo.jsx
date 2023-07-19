import { Button, Card, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

function GetTodo({ todos, setTodos }) {
  useEffect(() => {
    axios.get("http://localhost:3000/todos").then((response) => {
      setTodos(response.data);
    });
  }, []);
  return (
    <div>
      {todos.map((todo) => {
        return (
          <Card
            style={{
              background: "#444444",
              display: "flex",
              justifyContent: "space-between",
              width: 800,
              padding: 20,
            }}
          >
            <div>
              <Typography
                style={{ color: "#ff9901", fontFamily: "monospace" }}
                variant="h5"
              >
                {todo.title}
              </Typography>
              <Typography style={{ color: "#cbced4", fontFamily: "monospace" }}>
                {todo.description}
              </Typography>
            </div>
            <div>
              <button
                style={{ marginRight: 15 }}
                onClick={async () => {
                  var title = prompt("Enter title");
                  var description = prompt("Enter description");
                  var response = await axios.put(
                    "http://localhost:3000/todos/" + todo.id,
                    {
                      title: title,
                      description: description,
                    }
                  );
                  setTodos(response.data);
                }}
              >
                Edit
              </button>

              <button
                onClick={async () => {
                  const response = await axios.delete(
                    "http://localhost:3000/todos/" + todo.id
                  );
                  setTodos(response.data);
                }}
              >
                Delete
              </button>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export default GetTodo;
