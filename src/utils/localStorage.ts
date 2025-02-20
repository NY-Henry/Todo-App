import { TaskTypes } from "@/types/taskTypes";

export function setTasks(value: TaskTypes[]) {
  try {
    localStorage.setItem("tasks", JSON.stringify(value));
  } catch (error) {
    console.log(`Error setting Value to local Storage`, error);
  }
}

export function getTasks() {
  try {
    const item = localStorage.getItem("tasks");
    if (item) {
      return JSON.parse(item) as TaskTypes[];
    } else {
      return undefined;
    }
  } catch (error) {
    console.log(`Error getting file from local storage`, error);
  }
}
