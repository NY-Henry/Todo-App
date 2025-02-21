import { TaskTypes } from "@/types/taskTypes";
import { getTasks, setTasks } from "@/utils/localStorage";
import { sortTasks } from "@/utils/sortTasks";
import { create } from "zustand";

interface TasksState {
  tasks: TaskTypes[];
  addTask: (task: TaskTypes) => void;
  editTask: (task: TaskTypes) => void;
  deleteTask: (task: TaskTypes) => void;
  markAsDOne: (task: TaskTypes) => void;
  filterAll: () => void;
  filterActive: () => void;
  filterCompleted: () => void;
}

const localTasks = getTasks() || [];

export const useTasksStore = create<TasksState>((set) => ({
  tasks: localTasks,

  addTask: (task: TaskTypes) =>
    set((state) => {
      const updatedTaks = [task, ...state.tasks];
      setTasks(updatedTaks);
      return { tasks: updatedTaks };
    }),

  editTask: (task: TaskTypes) =>
    set((state) => ({
      tasks: state.tasks.map((t) => (t.id === task.id ? { ...t, ...task } : t)),
    })),

  deleteTask: (task: TaskTypes) =>
    set((state) => {
      const updatedTasks = state.tasks.filter((t) => t.id !== task.id);
      setTasks(updatedTasks);
      return { tasks: updatedTasks };
    }),

  markAsDOne: (task: TaskTypes) =>
    set((state) => {
      const upDatedTasks = state.tasks.map((t) =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      );
      setTasks(upDatedTasks);
      return { tasks: upDatedTasks };
    }),

  filterAll() {
    set(() => {
      const allTasks = getTasks();

      const sortedTasks = allTasks ? sortTasks(allTasks) : undefined;

      return { tasks: sortedTasks || allTasks };
    });
  },

  filterActive() {
    set(() => {
      const updatedTasks = getTasks()?.filter((t) => !t.completed);

      const sortedTasks = updatedTasks ? sortTasks(updatedTasks) : undefined;

      return { tasks: sortedTasks || updatedTasks };
    });
  },

  filterCompleted() {
    set(() => {
      const updatedTasks = getTasks()?.filter((t) => t.completed);
      return { tasks: updatedTasks };
    });
  },
}));
