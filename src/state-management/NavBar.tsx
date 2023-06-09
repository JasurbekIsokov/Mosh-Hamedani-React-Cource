import LoginStatus from "./LoginStatus";
import { UseTasksContext } from "./tasks/TaskList";

const NavBar = () => {
  const { tasks } = UseTasksContext();

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>

      <LoginStatus />
    </nav>
  );
};

export default NavBar;
