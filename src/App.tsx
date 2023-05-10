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
import LoginStatusReducer from "./state-management/reducers/LoginStatusReducer";
import LoginStatusContext from "./state-management/context/LoginStatusContext";

function App() {
  const [tasks, TasksDispatch] = useReducer(TasksReducer, []);
  const [user, LoginStatusDispatch] = useReducer(LoginStatusReducer, "");

  return (
    <>
      {/* <PostList /> */}
      <LoginStatusContext.Provider
        value={{ user, dispatch: LoginStatusDispatch }}
      >
        <TasksContext.Provider value={{ tasks, dispatch: TasksDispatch }}>
          <NavBar />
          <HomePage />
        </TasksContext.Provider>
      </LoginStatusContext.Provider>
    </>
  );
}

export default App;
