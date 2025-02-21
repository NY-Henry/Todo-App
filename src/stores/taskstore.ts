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

// const initialTasks: TaskTypes[] = [
//   {
//     id: "0",
//     title: "Complete React project",
//     completed: false,
//     dueDate: new Date("2025-03-01"),
//     category: "Work",
//     createdAt: new Date("2025-02-18"),
//   },
//   {
//     id: "1",
//     title: "Buy groceries",
//     completed: false,
//     dueDate: new Date("2025-02-20"),
//     category: "Personal",
//     createdAt: new Date("2025-02-17"),
//   },

//   {
//     id: "3",
//     title: "Attend team meeting",
//     completed: true,
//     dueDate: new Date("2025-02-15"),
//     category: "Work",
//     createdAt: new Date("2025-02-10"),
//   },
//   {
//     id: "4",
//     title: "Go to the gym",
//     completed: false,
//     dueDate: new Date(),
//     category: "Health",
//     createdAt: new Date("2025-02-16"),
//   },
//   {
//     id: "5",
//     title: "Read a book",
//     completed: true,
//     dueDate: new Date("2025-02-14"),
//     category: "Personal",
//     createdAt: new Date("2025-02-10"),
//   },
// ];

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
