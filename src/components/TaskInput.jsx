import { TextField } from "@mui/material";
import React from "react";
import { addTodo } from "../state/todo/todoSlice";
import { useDispatch } from "react-redux";

const TaskInput = () => {
  const dispatch = useDispatch();
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch(
        addTodo({
          id: Date.now(),
          task: e.target.value,
          isDone: false,
        })
      );
      e.target.value = "";
    }
  };
  return (
    <TextField
      id="outlined-basic"
      label="Enter a task"
      onKeyDown={handleKeyDown}
      variant="outlined"
      fullWidth
    />
  );
};

export default TaskInput;
