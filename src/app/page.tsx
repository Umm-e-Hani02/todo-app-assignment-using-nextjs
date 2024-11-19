'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Home() {

  const [taskList, setTaskList] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTaskList([...taskList, newTask]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index: number) => {
    setTaskList(taskList.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-emerald-500 min-h-screen">
      <h1 className="text-center text-4xl p-10 font-bold pt-32">
        ToDo App by <span className="text-nowrap">Umm-e-Hani</span>
      </h1>
      <div className="items-center justify-center flex flex-col m-auto">
        <input
          type="text" placeholder="Add new task" value={newTask} onChange={(e) => setNewTask(e.target.value)} className="rounded-lg p-2 text-slate-500 w-64" required/>
        <button onClick={handleAddTask} className="m-5 p-2 bg-emerald-600 rounded-2xl w-24 hover:bg-emerald-700 transition-all 20s active:opacity-5">
          Add Task
        </button>
      </div>

      {taskList.length > 0 && (
        <div className="m-auto bg-emerald-600 w-96 p-1 items-center rounded-lg justify-between">
          <ul>
            {taskList.map((task, index) => (
              <li
                key={index}
                className="flex items-center justify-between gap-3 m-2 rounded-lg bg-white p-2"
              >
                <span className="text-left flex-1 text-gray-950">{task}</span>
                <button
                  onClick={() => handleDeleteTask(index)} className="bg-red-600 text-white px-2 py-1 rounded">
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
