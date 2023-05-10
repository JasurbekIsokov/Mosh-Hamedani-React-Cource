import React, { ReactNode, useReducer } from "react";
import LoginStatusReducer from "../../reducers/LoginStatusReducer";
import LoginStatusContext from "../LoginStatusContext";

interface Props {
  children: ReactNode;
}

const UseLoginStatusContextProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(LoginStatusReducer, "");

  return (
    <LoginStatusContext.Provider value={{ user, dispatch }}>
      {children}
    </LoginStatusContext.Provider>
  );
};

export default UseLoginStatusContextProvider;
