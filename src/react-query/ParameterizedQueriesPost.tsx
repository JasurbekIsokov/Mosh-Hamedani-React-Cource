import { useState } from "react";
import ParameterizedQueries from "./hook/ParameterizedQueries";

const ParameterizedQueriesPost = () => {
  // Parameterized Queries
  const [userId, setUserId] = useState<number>();

  const { data: todos, error, isLoading } = ParameterizedQueries(userId);

  return (
    <div>
      {/* Parameterized Queries */}
      <select
        onChange={(event) => setUserId(parseInt(event.target.value))}
        value={userId}
        className="form-select mb-3"
      >
        <option value=""></option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>4<option value="3">User 3</option>
      </select>
      <ul
        className="list-group"
        style={{ maxHeight: "440px", overflow: "auto" }}
      >
        {todos?.map((todo) => (
          <li key={todo.id} className="list-group-item">
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParameterizedQueriesPost;
