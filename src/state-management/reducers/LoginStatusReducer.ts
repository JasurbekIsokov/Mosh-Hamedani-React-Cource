interface Login {
  type: "LOGIN";
  userName: string;
}

interface Logout {
  type: "LOGOUT";
}

type Action = Login | Logout;

const LoginStatusReducer = (state: string, action: Action): string => {
  switch (action.type) {
    case "LOGIN":
      return action.userName;
    case "LOGOUT":
      return "";
  }
};

export default LoginStatusReducer;
