import React from "react";
import "./App.css";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Report from "./components/Report";

function App() {
  return (
    <div>
      <h1 className="text-4xl text-center py-4 mb-4 font-bold text-blue-600 bg-gray-200">
        QuadB Todo App
      </h1>
      <div className="flex flex-col md:flex-row justify-center gap-x-8 mx-auto px-10 py-6">
        <main className="w-1/2 flex flex-col">
          <TaskInput />
          <TaskList />
        </main>
        <section className="w-1/3">
          <Report />
        </section>
      </div>
    </div>
  );
}

export default App;
