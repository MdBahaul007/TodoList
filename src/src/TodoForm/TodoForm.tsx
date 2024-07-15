/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
import { Stack } from "@mui/material";
import React, { useState } from "react";
import backgroundImage from "../../assets/bg-1.jpg";
import { v4 as uuidv4 } from "uuid";
import TodoList from "../TodoList/TodoList";

const TodoForm = () => {
  const [searchValue, setSearchValue] = useState("");
  const [todos, setTodos]: any = useState([]);
  const [editId, setEditId] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault(); // , default action belonging to event will not occur, here clicking on submit prevents form from submitting.
    if (searchValue) {
      setTodos((prevValues: any) => {
        if (editId) {
          return prevValues.map((todo: any) =>
            todo?.id === editId ? { ...todo, todoData: searchValue } : todo
          );
        } else {
          return [
            ...prevValues,
            { id: uuidv4(), todoData: searchValue, isEditable: true },
          ];
        }
      });
      setEditId("");
      setSearchValue("");
    }
  };

  const handleDelete = (clickedTodo: any) => {
    const updatedTodo = todos.filter(
      (todo: any) => todo?.id !== clickedTodo?.id
    );
    setTodos(updatedTodo);
  };

  const handleEdit = (clickedTodo: any) => {
    setSearchValue(clickedTodo?.todoData);
    setEditId(clickedTodo?.id);
  };

  const handleSave = (clickedTodo: any) => {
    const updatedData = todos?.map((todo: any) =>
      todo?.id === clickedTodo?.id ? { ...todo, isEditable: false } : todo
    );
    setTodos(updatedData);
  };

  return (
    <>
      <Stack
        width="100vw"
        height="100vh"
        display="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover", // image will be  covered in  the entire container ie Stack of with 100vw and height 100vh.
          backgroundPosition: "center",
        }}
      >
        <Stack
          width="35vw"
          minHeight="75vh"
          bgcolor="#182f2f"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <div>
            <h3 style={{ fontSize: "30px", color: "#fff", fontWeight: "600" }}>
              Task List
            </h3>
          </div>

          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="What are your task for today?"
                value={searchValue}
                onChange={(e) => {
                  console.log("eeeee", e?.target?.value);
                  setSearchValue(e?.target?.value);
                }}
                style={{
                  padding: "10px",
                  width: "15vw",
                  border: "2px solid #8d4f93",
                  borderRadius: "5px",
                }}
              />
              <button
                style={{
                  padding: "10px",
                  backgroundColor: "#8d4f93",
                  color: "#fff",
                  border: "2px solid #8d4f93",
                  borderRadius: "5px",
                  marginLeft: "10px",
                }}
              >
                {editId ? "Update Task" : "Add Task"}
              </button>
            </form>
            <TodoList
              todoList={todos}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleSave={handleSave}
            />
          </div>
        </Stack>
      </Stack>
    </>
  );
};

export default TodoForm;
