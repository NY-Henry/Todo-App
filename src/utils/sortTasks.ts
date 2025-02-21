import { TaskTypes } from "@/types/taskTypes";
import { dateFormater } from "./formatDate";

export function sortTasks(tasks: TaskTypes[]) {
  const todaysTasks = tasks.filter((t) => dateFormater(t.dueDate) === "Today");
  const otherTasks = tasks.filter((t) => dateFormater(t.dueDate) !== "Today");

  return [...todaysTasks, ...otherTasks];
}
