import "./App.css";
import PostList from "./react-query/PostList";
import TodoList from "./react-query/TodoList";
import TodoForm from "./react-query/TodoForm";
import Counter from "./state-management/Counter";
import TaskList from "./state-management/TaskList";
import LoginStatus from "./state-management/LoginStatus";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import UseLoginStatusContextProvider from "./state-management/context/hooks/UseLoginStatusContextProvider";
import UseTasksContextProvider from "./state-management/context/hooks/UseTasksContextProvider";

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
