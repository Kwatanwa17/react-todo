import React, { useState } from "react"
import { TaskInput, TaskList } from "./components"
import { Task } from "./types"

const initialState: Task[] = [
  {
    id: 2,
    title: "次にやるやつ",
    done: false,
  },
  {
    id: 1,
    title: "はじめにやるやつ",
    done: true,
  },
]

const App: React.FC = () => {
  const [tasks, setTasks] = useState(initialState)

  return (
    <div>
      <TaskInput setTasks={setTasks} tasks={tasks} />
      <TaskList setTasks={setTasks} tasks={tasks} />
    </div>
  )
}

export default App
