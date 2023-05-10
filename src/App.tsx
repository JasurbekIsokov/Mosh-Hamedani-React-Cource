import "./App.css";
import PostList from "./react-query/PostList";
import TodoList from "./react-query/TodoList";
import TodoForm from "./react-query/TodoForm";
import Counter from "./state-management/Counter";
import TaskList from "./state-management/TaskList";
import LoginStatus from "./state-management/LoginStatus";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import { useReducer, Dispatch } from "react";
import TasksReducer from "./state-management/reducers/TasksReducer";
import TasksContext from "./state-management/context/TasksContext";

function App() {
  const [tasks, dispatch] = useReducer(TasksReducer, []);

  return (
    <>
      {/* <PostList /> */}
      <TasksContext.Provider value={{ tasks, dispatch }}>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </>
  );
}

export default App;
