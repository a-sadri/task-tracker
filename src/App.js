import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

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

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000)
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  return (
    <div className="container">
      <Header title="Header Text" />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? <Tasks
        tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleReminder} /> :
        'No tasks to show'}
    </div>
  );
}

export default App;
