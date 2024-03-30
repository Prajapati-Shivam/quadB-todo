import * as React from "react";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ListItem } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";

export default function TaskList() {
  const todoList = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch({ type: "todo/removeTodo", payload: id });
  };

  const handleDone = (id) => {
    dispatch({ type: "todo/doneTodo", payload: id });
  };
  return (
    <List
      sx={{ width: "100%", maxWidth: 400, bgcolor: "background.paper" }}
      component="nav"
    >
      {todoList.length === 0 && (
        <ListItem>
          <ListItemText primary="No tasks" />
        </ListItem>
      )}
      {todoList.map((item) => (
        <ListItem
          key={item.id}
          className={
            "flex items-center rounded-lg hover:bg-gray-100" +
            (item.isDone ? " text-gray-400 line-through" : "")
          } // Add this line
        >
          <div className="flex-1 font-semibold text-lg">{item.task}</div>
          <ListItemIcon className="flex items-center">
            <Checkbox
              defaultChecked={item.isDone}
              onClick={() => handleDone(item.id)}
            />

            <IconButton edge="end" onClick={() => handleDelete(item.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemIcon>
        </ListItem>
      ))}
    </List>
  );
}
