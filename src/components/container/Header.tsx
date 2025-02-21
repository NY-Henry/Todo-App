import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { DatePicker } from "./Calender";
import { TaskTypes } from "@/types/taskTypes";
import { useTasksStore } from "@/stores/taskstore";
import { useDateStore } from "@/stores/dateStore";

const DialogComponent = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [task, setTask] = useState<TaskTypes>({
    title: "",
    category: "",
    completed: false,
    createdAt: new Date(),
    dueDate: new Date(),
    id: "",
  });

  // Task Store
  const { addTask } = useTasksStore();
  const { date } = useDateStore();

  function handleTaskAdd() {
    setIsOpen(false);
    addTask({
      title: task.title,
      category: task.category,
      completed: false,
      createdAt: new Date(),
      dueDate: date,
      id: `${task.title}`,
    });
    setTask((prev) => ({
      ...prev,
      title: "",
      category: "",
      completed: false,
      createdAt: new Date(),
      dueDate: new Date(),
      id: "",
    }));
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          onClick={() => setIsOpen(true)}
          className="p-6 text-xl rounded-none border border-t-0 border-white"
        >
          Add Task
        </Button>
      </DialogTrigger>
      {isOpen && (
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New Task</DialogTitle>
            <DialogDescription>
              Add just one of your other tasks😊
            </DialogDescription>
          </DialogHeader>

          {/* Task Title Input */}
          <div>
            <h1 className="text-slate-800 text-2xl">Task Title:</h1>
            <Input
              placeholder="Eg: Do Laundry..."
              value={task?.title}
              onChange={(e) =>
                setTask((prev) => ({
                  ...prev,
                  title: e.target.value,
                }))
              }
            />
          </div>

          {/* Task Category */}
          <div>
            <h1 className="text-slate-800 text-lg">Category:</h1>
            <Input
              placeholder="Eg: Study, Personal, Work etc..."
              value={task?.category}
              onChange={(e) =>
                setTask((prev) => ({
                  ...prev,
                  category: e.target.value,
                }))
              }
            />
          </div>

          {/* Due Date */}
          <div>
            <h1 className="text-slate-800 text-md">Due Date:</h1>
            <DatePicker />
          </div>
          <DialogFooter>
            <Button
              onClick={() => {
                // Add Task
                handleTaskAdd();
              }}
            >
              Save Task
            </Button>
          </DialogFooter>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default DialogComponent;
