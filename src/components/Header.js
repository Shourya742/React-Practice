import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
const Header = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "underline",
      color: isActive ? "red" : "white",
      fontSize: "25px",
    };
  };
  return (
    <div className="header">
      <NavLink to={"/app"} style={navLinkStyles}>
        Home
      </NavLink>
      <NavLink to={"/about"} style={navLinkStyles}>
        About
      </NavLink>
      <NavLink to={"/contact"} style={navLinkStyles}>
        Contact
      </NavLink>
    </div>
  );
};

export default Header;
