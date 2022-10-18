import { NavLink } from "react-router-dom";

const Section = () => {
  return (
    <>
      <section style={{ backgroundColor: "#14202e" }}>
        <NavLink
          to="/"
          type="button"
          className="btn btn-primary w-50 py-3"
          style={{ borderRadius: "0px" }}
        >
          Home page
        </NavLink>
        <NavLink
          to="/bookmarked"
          type="button"
          className="btn btn-outline-success w-50 py-3"
          style={{ borderRadius: "0px" }}
        >
          Bookmarked
        </NavLink>
      </section>
    </>
  );
};

export default Section;
