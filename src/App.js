import "./App.css";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="flex items-center flex-col px-80">
      <h1 className="text-4xl font-bold my-6">QuadB Todo App</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
