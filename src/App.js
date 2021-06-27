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

  // Delete 
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header title="Header Text" />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> :
        'No tasks to show'}
    </div>
  );
}

export default App;
