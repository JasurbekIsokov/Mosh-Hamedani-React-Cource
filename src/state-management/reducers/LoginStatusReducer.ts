interface Login {
  type: "LOGIN";
  user: string;
}

interface Logout {
  type: "LOGOUT";
}

export type LoginStatusAction = Login | Logout;

const LoginStatusReducer = (
  user: string,
  action: LoginStatusAction
): string => {
  switch (action.type) {
    case "LOGIN":
      return action.user;
    case "LOGOUT":
      return "";
  }
};

export default LoginStatusReducer;
