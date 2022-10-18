import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import Users from "./users";

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();

    let alert = document.getElementById("alert");
    alert.textContent = "";
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "" && password === "") {
      alert.textContent = "Please enter your credentials!";
      alert.style.color = "red";
    } else if (username !== "" && password !== "") {
      Users?.forEach((user) => {
        alert.textContent = "";
        if (user.username === username && user.password === password) {
          dispatch(authActions.Login());
          return;
        } else {
          alert.textContent = "Incorrect Credentials!";
          alert.style.color = "red";
        }
      });
    }
  };
  return (
    <>
      <div
        className="d-flex mt-5 pt-5"
        style={{
          margin: "auto",
          justifyContent: "center",
          backgroundColor: "#14202e",
        }}
      >
        <form onSubmit={handleLogin}>
          <div
            className="card"
            style={{ width: "100%", backgroundColor: "#2d4356" }}
          >
            <h1 className="card-title m-4 text-white">Login</h1>
            <p className="card-text text-secondary">
              Default: user1 and password1
            </p>
            <p id="alert"></p>
            <div className="form-group mx-4">
              <label
                htmlFor="username"
                style={{ float: "left", color: "#fff" }}
              >
                Username
              </label>
              <input
                type="text"
                className="form-control bg-dark text-white"
                id="username"
                placeholder="Username"
                required
              />
            </div>
            <div className="form-group m-4">
              <label
                htmlFor="password"
                style={{ float: "left", color: "#fff" }}
              >
                Password
              </label>
              <input
                type="password"
                className="form-control bg-dark text-white"
                id="password"
                placeholder="Password"
                required
              />
            </div>

            <div className="justify-content-center m-4">
              <button type="submit" className="btn btn-primary w-100">
                SIGN IN
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
