import { useReducer, useState } from "react";
import LoginStatusReducer from "./reducers/LoginStatusReducer";

const LoginStatus = () => {
  const [user, dispatch] = useReducer(LoginStatusReducer, "");

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => dispatch({ type: "LOGIN", userName: "Jasurbek Isokov" })}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
