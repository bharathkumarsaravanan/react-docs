import React, { useState, useRef } from "react";
import { useOptimistic, startTransition } from "react";

const simulateApiCall = async (task) => {
  // Simulate a delay to mimic an API call
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return {text: task}; // Return the task
};

function TaskList() {
  const [tasks, setTasks] = useState([]); // State to hold the tasks
  const formRef = useRef(); // Ref for the form

  // Optimistic state management
  const [optimisticTasks, addOptimisticTask] = useOptimistic(
    tasks,
    (state, newTask) => [
      ...state,
      {
        text: newTask,
        sending: true, // Flag to indicate that the task is being sent
      },
    ]
  );

  React.useEffect(() => {console.log(optimisticTasks)}, [optimisticTasks]);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(formRef.current);
    const newTask = formData.get("task"); // Get the task from the form

    // Optimistically add the new task
    startTransition(() => {
      addOptimisticTask(newTask);
    });

    // Clear the form after optimistic update
    formRef.current.reset();

    // Simulate API call to add task
    let res = await simulateApiCall(newTask);

    // Add the new task to the actual tasks state
    setTasks((prev) => [...prev, res]);
  };

  return (
    <div>
      <h2>Task List with Optimistic Updates</h2>
      {/* Render the optimistic task list */}
      {optimisticTasks.map((task, index) => (
        <div key={index}>
          {task.text}
          {task.sending && <small> (Sending...)</small>}
        </div>
      ))}

      {/* Form to add new tasks */}
      <form ref={formRef} onSubmit={handleSubmit}>
        <input type="text" name="task" placeholder="Enter a task" required />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default TaskList;
