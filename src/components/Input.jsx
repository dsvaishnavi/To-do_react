
import { useState } from "react";

export const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);

  const handleInputchange = (value) => {
    setInputValue(value);
  };

  const handlesubmit = (event) => {
    event.preventDefault();

    if (!inputValue.trim()) return;

    if (task.includes(inputValue)) {
      setInputValue(" ");
      return;
    }
    setTask((prev) => [...prev, inputValue]);
    setInputValue("");
  };
  const handleDelete = (index) => {
    const newTasks = task.filter((_, i) => i !== index);
    setTask(newTasks);
  };


  
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
            TO-DO APP
          </h1>
          <form onSubmit={handlesubmit} className="mb-4">
            <input
              type="text"
              value={inputValue}
              onChange={(event) => handleInputchange(event.target.value)}
              className="w-full p-3 text-2xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
              placeholder="Enter your task"
            />
            <button
              type="submit"
              className="w-full p-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 focus:outline-none"
            >
              Add Task
            </button>
          </form>
          <ul className="space-y-2">
            {task.map((curtask, index) => {
              return (
                <li
                  key={index}
                  className="p-3 border-b border-gray-300 flex items-center justify-between"
                >
                  <span className="text-gray-800">{curtask}</span>
                  <button
                onClick={() => handleDelete(index)}
                className="text-red-600 hover:text-red-800"
              >
                Delete
              </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
