import React from "react";
import { useSelector } from "react-redux";

const Report = () => {
  const todoList = useSelector((state) => state.todo.todos);
  const totalTask = todoList.length;
  const completed = todoList.filter((item) => item.isDone).length;
  const pending = totalTask - completed;
  return (
    <div className="text-2xl flex flex-col gap-y-4 font-semibold border-2 border-gray-400 rounded-lg p-4">
      <div className="flex justify-around">
        <div>Total tasks:</div>{" "}
        <span className="text-blue-500 text-center">{totalTask}</span>
      </div>
      <div className="flex justify-around ">
        <div>Completed tasks:</div>{" "}
        <span className="text-blue-500 text-center">{completed}</span>
      </div>
      <div className="flex justify-around ">
        <div>Pending tasks:</div>{" "}
        <span className="text-blue-500 text-center">{pending}</span>
      </div>
    </div>
  );
};

export default Report;
