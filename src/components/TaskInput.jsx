import { TextField } from "@mui/material";
import React from "react";

const TaskInput = () => {
  return (
    <TextField
      id="outlined-basic"
      label="Enter a task"
      variant="outlined"
      fullWidth
    />
  );
};

export default TaskInput;
