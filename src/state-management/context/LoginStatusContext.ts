import React, { Dispatch } from "react";
import { LoginStatusAction } from "../reducers/LoginStatusReducer";

interface LoginStatusContextType {
  user: string;
  dispatch: Dispatch<LoginStatusAction>;
}

const LoginStatusContext = React.createContext<LoginStatusContextType>(
  {} as LoginStatusContextType
);

export default LoginStatusContext;
