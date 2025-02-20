import { useTasksStore } from "@/stores/taskstore";
import TaskDetails from "../container/TaskDetails";
import { useState } from "react";
import { TaskTypes } from "@/types/taskTypes";
// import { formatDate } from "@/utils/formatDate";

const Task = ({ task }: { task: TaskTypes }) => {
  const [showTaskDetails, setShowTaskDetails] = useState<boolean>(false);
  const { markAsDOne } = useTasksStore();

  return (
    <div
      onClick={() => setShowTaskDetails(true)} // Toggle instead of always setting to true
      onDoubleClick={() => markAsDOne(task)}
      className="border py-2 my-2 border-r-0 border-l-0 pl-4 border-b-2 rounded-t-lg bg-gradient-to-l from-zinc-700 shadow-md shadow-zinc-800 cursor-pointer"
    >
      {/* Title */}
      <h1
        className={`text-lg select-none font-semibold ${
          task.completed ? "line-through" : ""
        }`}
      >
        {task.title}
      </h1>

      {/* Task Details */}
      {showTaskDetails && (
        <TaskDetails
          task={task}
          isTaskDetailsOpen={() => setShowTaskDetails(false)}
        />
      )}

      {/* Due Date and Category */}
      <div className="flex justify-between mr-4 items-center">
        <p className="text-slate-300 mb-0.5 select-none">
          {/* {task.completed ? (
            <span className="text-green-500">DONE</span>
          ) : (
            `Due: ${
              !task.dueDate
                ? "No date"
                : formatDate(new Date()) === formatDate(task.dueDate)
                ? "Today"
                : formatDate(task.dueDate) ===
                  new Date(Date.now() + 86400000).toLocaleDateString()
                ? "Tomorrow"
                : formatDate(task.dueDate)
            }`
          )} */}
          {/* {task.dueDate?.toLocaleDateString()} */}
        </p>
        <p className="text-slate-300 mb-0.5 select-none">{task.category}</p>
      </div>
    </div>
  );
};

export default Task;
