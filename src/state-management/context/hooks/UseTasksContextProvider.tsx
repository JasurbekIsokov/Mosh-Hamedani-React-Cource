import React, { Children, ReactNode, useReducer } from "react";
import TasksReducer from "../../reducers/TasksReducer";
import TasksContext from "../TasksContext";

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
