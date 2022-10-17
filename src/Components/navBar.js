import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { authActions } from "../store/auth";
const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authActions.Logout());
  };
  return (
    <>
      <nav className="navbar navbar-light bg-dark p-4">
        <NavLink to="/" type="button" className="btn btn-primary">
          Home page
        </NavLink>
        <NavLink
          to="/bookmarked"
          type="button"
          className="btn btn-outline-success"
        >
          Bookmarked Restauants
        </NavLink>

        <button type="button" className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </>
  );
};

export default Navbar;
