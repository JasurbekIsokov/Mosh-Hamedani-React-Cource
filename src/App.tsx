import "./App.css";
import PostList from "./react-query/PostList";
import TodoList from "./react-query/TodoList";
import TodoForm from "./react-query/TodoForm";
import Counter from "./state-management/Counter";
import TaskList from "./state-management/tasks/TaskList";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import UseLoginStatusContextProvider from "./state-management/context/hooks/UseLoginStatusContextProvider";
import { UseTasksContextProvider } from "./state-management/tasks";

function App() {
  return (
    <>
      {/* <PostList /> */}
      <UseLoginStatusContextProvider>
        <UseTasksContextProvider>
          <NavBar />
          <HomePage />
        </UseTasksContextProvider>
      </UseLoginStatusContextProvider>
    </>
  );
}

export default App;
