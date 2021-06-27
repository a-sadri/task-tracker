import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor appoinment',
      day: '5th july at 5:20',
      reminder: 'true',
    },
    {
      id: 2,
      text: 'meeting at work',
      day: '3th june at 11:30',
      reminder: 'true',
    },
    {
      id: 3,
      text: 'food shopping',
      day: '15th feb at 12:20',
      reminder: 'true',
    },
  ])
  return (
    <div className="container">
      <Header title="Header Text" />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
