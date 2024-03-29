import * as React from "react";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ListItem } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TaskList() {
  const list = [
    { id: 1, task: "Task 1", isDone: false },
    { id: 2, task: "Task 2", isDone: true },
    { id: 3, task: "Task 3", isDone: false },
    { id: 4, task: "Task 4", isDone: true },
  ];
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
    >
      {list.length === 0 && (
        <ListItem>
          <ListItemText primary="No tasks" />
        </ListItem>
      )}
      {list.map((item) => (
        <ListItem
          key={item.id}
          className={
            "flex items-center rounded-lg hover:bg-gray-100" +
            (item.isDone ? " text-gray-400 line-through" : "")
          } // Add this line
        >
          <ListItemText primary={item.task} />
          <ListItemIcon className="flex items-center">
            <Checkbox defaultChecked={item.isDone} />
            <DeleteIcon />
          </ListItemIcon>
        </ListItem>
      ))}
    </List>
  );
}
