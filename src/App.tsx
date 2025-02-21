import DialogComponent from "./components/container/Header";
import FilterTasks from "./components/container/FilterTask";
import TasksList from "./components/container/TasksList";

function App() {
  return (
    // Section
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-zinc-900 text-white">
      {/* The main Div that contains the app */}
      <div className="mx-auto rounded-lg shadow-sm shadow-white border min-h-[500px] min-w-[300px] sm:min-w-[400px] md:min-w-[500px]">
        {/* The app content goes here */}

        {/* Header */}
        <div className="flex justify-center items-center">
          <DialogComponent />
        </div>
        {/* Filer Tasks */}
        <div className="flex justify-between items-center ml-4 my-4 mr-4">
          <h1 className="text-lg text-slate-300">Filter Tasks:</h1>
          <FilterTasks />
        </div>

        {/* Todos List and scroll area */}
        <h1 className="text-center text-3xl mt-2 mb-2 font-bold text-slate-300 cursor-default">
          Henry's Tasks
        </h1>
        <TasksList />
      </div>
    </section>
  );
}

export default App;
