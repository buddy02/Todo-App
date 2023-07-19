import { Card } from "@mui/material";
import axios from "axios";
import { useState } from "react";

function AddTodo({ setTodos }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <>
      <Card
        style={{
          background: "#444444",
          display: "flex",
          justifyContent: "space-between",
          width: 800,
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <div style={{ display: "flex" }}>
          <div className="form-control" style={{ marginRight: 40 }}>
            <input
              required
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            ></input>
            <label>
              <span style={{ transitionDelay: "0ms" }}>T</span>
              <span style={{ transitionDelay: "50ms" }}>i</span>
              <span style={{ transitionDelay: "100ms" }}>t</span>
              <span style={{ transitionDelay: "150ms" }}>l</span>
              <span style={{ transitionDelay: "200ms" }}>e</span>
            </label>
          </div>
          <div className="form-control">
            <input
              required
              type="text"
              onChange={(e) => setDescription(e.target.value)}
            ></input>
            <label>
              <span style={{ transitionDelay: "0ms" }}>D</span>
              <span style={{ transitionDelay: "50ms" }}>e</span>
              <span style={{ transitionDelay: "100ms" }}>s</span>
              <span style={{ transitionDelay: "150ms" }}>c</span>
              <span style={{ transitionDelay: "200ms" }}>r</span>
              <span style={{ transitionDelay: "250ms" }}>i</span>
              <span style={{ transitionDelay: "300ms" }}>p</span>
              <span style={{ transitionDelay: "350ms" }}>t</span>
              <span style={{ transitionDelay: "400ms" }}>i</span>
              <span style={{ transitionDelay: "450ms" }}>o</span>
              <span style={{ transitionDelay: "500ms" }}>n</span>
            </label>
          </div>
        </div>
        <button
          style={{ marginTop: 30 }}
          onClick={async () => {
            var response = await axios.post("http://localhost:3000/todos/", {
              title: title,
              description: description,
            });
            setTodos((existingTodos) => [...existingTodos, response.data]);
          }}
        >
          Add
        </button>
      </Card>
    </>
  );
}

export default AddTodo;
