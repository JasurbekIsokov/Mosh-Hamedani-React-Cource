import React, { Children, ReactNode, useReducer } from "react";
import TasksContext from "./TasksContext";

export interface Task {
  id: number;
  title: string;
}

interface AddTask {
  type: "ADD";
  task: Task;
}

interface DeleteTask {
  type: "DELETE";
  id: number;
}

export type TaskAction = AddTask | DeleteTask;

const TasksReducer = (tasks: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD":
      return [action.task, ...tasks];
    case "DELETE":
      return tasks.filter((t) => t.id !== action.id);
  }
};

interface Props {
  children: ReactNode;
}

const UseTasksContextProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(TasksReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default UseTasksContextProvider;
