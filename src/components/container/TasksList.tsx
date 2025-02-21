import Task from "../ui2/Task";
import { ScrollArea } from "../ui/scroll-area";
import { useTasksStore } from "@/stores/taskstore";
import { useName } from "@/stores/name";

const TasksList = () => {
  const { tasks } = useTasksStore();
  const { name } = useName();

  return (
    <>
      <ScrollArea className="h-100  rounded-md">
        {tasks?.length > 0 ? (
          tasks.map((t) => <Task task={t} key={t.id} />)
        ) : (
          <>
            <hr />
            <p className="text-2xl font-semibold text-gray-500 text-center py-8">
              {name ? name : "Guest"} Please Add Tasks!
            </p>
          </>
        )}
      </ScrollArea>
    </>
  );
};

export default TasksList;
