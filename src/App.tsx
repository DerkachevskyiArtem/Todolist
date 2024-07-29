import React, { useState } from "react";
import "./App.css";
import { TaskType, Todolist } from "./Todolist";

function App() {
  let [tasks, setTasks] = useState([
    { id: 1, title: "CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "React", isDone: false },
    { id: 4, title: "Redux", isDone: false },
  ]);

  // let tasks = arr[0];
  // let setTasks = arr[1];

  function removeTask(id: number) {
    let filteredTasks = tasks.filter((t) => t.id !== id);
    setTasks(filteredTasks);
  }

  return (
    <div className="App">
      <Todolist title="Whtat to lern" tasks={tasks} removeTask={removeTask} />
    </div>
  );
}

export default App;
