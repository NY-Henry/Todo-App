import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTasksStore } from "@/stores/taskstore";

const FilterTasks = () => {
  const { filterAll, filterActive, filterCompleted } = useTasksStore();
  return (
    <Select
      onValueChange={(value) =>
        value === "all"
          ? filterAll()
          : value === "active"
          ? filterActive()
          : filterCompleted()
      }
    >
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder="Filter " />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Task Status</SelectLabel>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="active">Active</SelectItem>
          <SelectItem value="completed" className="text-green-500">
            Completed
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default FilterTasks;
