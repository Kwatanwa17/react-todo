import React, { useState } from "react"
import { TaskInput, TaskList } from "./components"
import { Task } from "./types"
import { Layout } from "./layout"

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

  return <Layout>fhsaiog;h</Layout>
}

export default App
