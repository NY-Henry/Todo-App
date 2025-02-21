import DialogComponent from "./components/container/Header";
import FilterTasks from "./components/container/FilterTask";
import TasksList from "./components/container/TasksList";
import { Input } from "./components/ui/input";
import { useName } from "./stores/name";
import { useState } from "react";

function App() {
  const { name, setName } = useName();
  const [userName, setUserName] = useState<string>("");
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

        {/* User Name */}
        {!name && (
          <div className="px-4 mt-4 flex items-center justify-center gap-2">
            <Input
              type="text"
              value={userName}
              minLength={5}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setName(userName);
                }
              }}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your Name..."
              className="w-[50%] bg-transparent border-slate-300 focus:border-slate-400 text-white placeholder:text-slate-300"
            />
            <button
              onClick={() => setName(userName)}
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              Submit
            </button>
          </div>
        )}

        {/* Filer Tasks */}
        <div className="flex justify-between items-center ml-4 my-4 mr-4">
          <h1 className="text-lg text-slate-300">Filter Tasks:</h1>

          <FilterTasks />
        </div>

        {/* Todos List and scroll area */}
        <h1 className="text-center text-3xl mt-2 mb-2 font-bold text-slate-300 cursor-default">
          {name ? name : "Guest"}'s Tasks
          <br />
          {!name && (
            <span className="text-sm font-semibold text-white">
              Enter Name Above...
            </span>
          )}
        </h1>
        <TasksList />
      </div>
    </section>
  );
}

export default App;
