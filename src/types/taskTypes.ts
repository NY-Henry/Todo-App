import { DateType } from "@/stores/dateStore";

export type TaskTypes = {
  title: string;
  completed: boolean;
  dueDate: DateType;
  category: string;
  createdAt: DateType;
  id: string;
};
