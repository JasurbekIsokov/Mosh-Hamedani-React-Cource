import { useRef } from "react";
import axios from "axios";

import { Todo } from "./hook/UseTodos";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAddTodo from "./hook/useAddTodo";

const TodoForm = () => {
  const ref = useRef<HTMLInputElement>(null);

  let customeId: number = 0;

  const generateId = (): number => {
    customeId = new Date().getTime();

    return customeId;
  };

  const addTodo = useAddTodo(() => {
    if (ref.current) ref.current.value = "";
  });

  return (
    <>
      {addTodo.error && (
        <div className="alert alert-danger">{addTodo.error.message}</div>
      )}
      <form
        className="row mb-3"
        onSubmit={(e) => {
          e.preventDefault();

          generateId();

          if (ref.current && ref.current.value)
            addTodo.mutate({
              id: customeId,
              title: ref.current?.value,
              completed: false,
              userId: 1,
            });
        }}
      >
        <div className="col">
          <input ref={ref} type="text" className="form-control" />
        </div>
        <div className="col">
          <button className="btn btn-primary" disabled={addTodo.isLoading}>
            {addTodo.isLoading ? "Adding..." : "Add"}
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
