'use client'; // Marks this component to be rendered on the client side, as Next.js uses server-side rendering by default
import { useState } from 'react'; // Import useState from React for managing state

export default function TodoApp() {
  // State to store the current input task and list of todos
  const [task, setTask] = useState(''); // 'task' holds the current value in the input field, 'setTask' updates it
  const [todos, setTodos] = useState<string[]>([]); // 'todos' holds the list of tasks, 'setTodos' updates the list

  // Function to add a new task to the list
  const addTodo = () => {
    if (task.trim() === '') return; // If the input task is empty or just whitespace, do nothing
    setTodos([...todos, task]); // Add the new task to the todos array using the spread operator to include existing tasks
    setTask(''); // Clear the input field after the task is added
  };

  // Function to delete a task from the list by its index
  const deleteTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index); // Filter out the task at the given index
    setTodos(updatedTodos); // Update the todos array with the filtered result
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      {/* Title of the Todo App */}
      <h1 className="text-4xl text-center font-bold text-blue-600 mb-5">Simple Todo App</h1>

      {/* Input field and Add Task button */}
      <div className="max-w-xl mx-auto flex space-x-2">
        {/* Input field for the task */}
        <input
          type="text"
          value={task} // The value of the input field is bound to the task state
          onChange={(e) => setTask(e.target.value)} // Updates task state as the user types
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter a task" // Placeholder text for the input field
        />
        {/* Add Task button */}
        <button
          onClick={addTodo} // When clicked, it calls the addTodo function to add the current task
          className="p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
        >
          Add Task
        </button>
      </div>

      {/* Task list section */}
      <ul className="max-w-xl mx-auto mt-5 space-y-2">
        {/* Loop through todos array and render each task */}
        {todos.map((todo, index) => (
          <li
            key={index} // Key helps React keep track of each list item for efficient updates
            className="p-3 bg-white border border-gray-300 rounded shadow flex justify-between items-center"
          >
            {/* Display the task along with its index */}
            <span>{index + 1}. {todo}</span>
            {/* Delete button for removing the task */}
            <button
              onClick={() => deleteTodo(index)} // Calls the deleteTodo function with the current task's index
              className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-200"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
