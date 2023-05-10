import UseLoginStatusContext from "./context/hooks/UseLoginStatusContext";

const LoginStatus = () => {
  const { user, dispatch } = UseLoginStatusContext();

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
        onClick={() => dispatch({ type: "LOGIN", user: "Jasurbek Isokov" })}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
