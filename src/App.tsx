import { useState } from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./components/About";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";

import Header from "./components/Header";
import TaskDetails from "./components/TaskDetails";
import { Tasks } from "./components/Tasks";
import { TaskModel } from "./models/Task";


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
    [
      {
        "id": 1,
        "text": "Doctors Appointment",
        "day": "Feb 5th at 2:30pm",
        "reminder": true
      },
      {
        "id": 2,
        "text": "Meeting at School",
        "day": "Feb 6th at 1:30pm",
        "reminder": true
      }
    ]
  )

  // Delete Task
  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const toggleReminder = (id: number) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  const toggleOnAdd = () => {
    setShowAddTask(!showAddTask)
  }

  const addTask = (task: {
    text: string,
    day: string,
    reminder: boolean,
  }) => {
    const id = tasks.map(task => task.id).reduce((prev, curr) => Math.max(prev, curr)) + 1
    const newTask: TaskModel = {
      id, ...task
    }

    setTasks([...tasks, newTask])
  }

  return (
    <Router>
      <div className="container">
        <Header onAdd={toggleOnAdd} showAdd={showAddTask} />
        <Routes>
          <Route path='/' element=
            {
              <>
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks to show'}
              </>
            }>
          </Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/task/:id' element={<TaskDetails />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
