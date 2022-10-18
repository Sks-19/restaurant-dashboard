import { useDispatch } from "react-redux";

import { authActions } from "../store/auth";
const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authActions.Logout());
  };
  return (
    <>
      <nav
        className="navbar navbar-light py-2 px-4"
        style={{ backgroundColor: "#14202e" }}
      >
        <h1 className="text-white navbar-brand">Restaurant Dashboard</h1>
        <button type="button" className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </>
  );
};

export default Navbar;
