import { useState } from "react";
import "./App.css";
import Card from "./components/card";
import Input from "./components/input";
import List from "./components/list";

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="app">
      <Card>
        <Input setTasks={setTasks} />
        <List tasks={tasks} setTasks={setTasks} />
      </Card>
    </div>
  );
}

export default App;
