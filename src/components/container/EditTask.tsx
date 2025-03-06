// import React, { useState } from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "../ui/dialog";
// import { Input } from "../ui/input";
// import { TaskTypes } from "@/types/taskTypes";
// import { DatePicker } from "./Calender";
// import { Button } from "../ui/button";
// import { Edit2Icon } from "lucide-react";

// interface EditProps {
//   children: React.ReactNode;
//   task: TaskTypes;
// }

// const EditTask: React.FC<EditProps> = ({ children, task }) => {
//   const [error, setError] = useState<boolean>(false);
//   const [title, setTitle] = useState(task?.title);

//   console.log(title);

//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         {/* This will be replaced by whatever element you pass from the parent component */}
//         {children}
//       </DialogTrigger>
//       <DialogContent>
//         <DialogHeader>
//           <DialogTitle>Edit Task</DialogTitle>
//           <DialogDescription>Make changes to your task here.</DialogDescription>
//         </DialogHeader>

//         <DialogDescription>
//           {" "}
//           {/* Task Title Input */}
//           <div>
//             <h1 className="text-slate-800 text-2xl">Task Title:</h1>
//             <Input
//               value={title}
//               onChange={(e) => {
//                 setTitle(e.target.value);
//               }}
//               maxLength={30}
//             />
//           </div>
//           {/* Task Category */}
//           <div>
//             <h1 className="text-slate-800 text-lg">Category:</h1>
//             <Input
//               placeholder="Eg: Study, Personal, Work etc..."
//               value={task?.category}
//               maxLength={15}
//             />
//           </div>
//           {/* Due Date */}
//           <div>
//             <h1 className="text-slate-800 text-md">Due Date:</h1>
//             <DatePicker />
//           </div>
//         </DialogDescription>

//         <DialogFooter>
//           <Button>
//             EDIT THIS TASK <Edit2Icon />{" "}
//           </Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default EditTask;
