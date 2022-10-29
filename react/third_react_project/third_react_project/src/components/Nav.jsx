import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <NavLink to="">Home</NavLink>
      <NavLink to="animals">Animals</NavLink>
      <NavLink to="newanimal">New Animal Form</NavLink>
    </nav>
  );
};
