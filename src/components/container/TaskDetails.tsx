import React, { useState } from "react";
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
import { TaskTypes } from "@/types/taskTypes";
import { useTasksStore } from "@/stores/taskstore";
// import { formatDate } from "@/utils/formatDate";

interface TaskDetailsProps {
  isTaskDetailsOpen: () => void;
  task: TaskTypes;
}

const TaskDetails: React.FC<TaskDetailsProps> = ({
  isTaskDetailsOpen,
  task,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { deleteTask, markAsDOne } = useTasksStore();

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
        if (!open) {
          isTaskDetailsOpen();
        }
      }}
    >
      <DialogTrigger asChild>
        <Button
          onClick={() => {
            setIsOpen(true);
          }}
          className="px-6 bg-green-800 rhover:bg-green-600 rounded-2xl text-md "
        >
          Details
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{task.title}</DialogTitle>
          <DialogDescription>
            {task.completed ? (
              <span className="text-green-500 text-lg underline">
                Task Was Completed 🎉
              </span>
            ) : (
              "Task Still On Going"
            )}
          </DialogDescription>
          {/* <p className="text-slate-800">
            <span className="font-bold">Created: </span>
            {formatDate(task.createdAt)}
          </p> */}
          <p className="text-slate-800">
            <span className="font-bold">Completed:</span>{" "}
            {task.completed.toString().toUpperCase()}
          </p>
        </DialogHeader>
        <DialogFooter>
          <Button
            className="bg-red-600 hover:bg-red-500"
            onClick={(e) => {
              e.stopPropagation();

              setIsOpen(false);
              deleteTask(task);
            }}
          >
            DELETE TASK
          </Button>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              markAsDOne(task);
              setIsOpen(false);
            }}
            className="bg-green-500"
          >
            {task.completed ? "RESTORE TASK" : "Mark As DOne"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TaskDetails;
