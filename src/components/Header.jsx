import { NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
  "nav-link" + (isActive ? " is-active" : "");

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__brand">Brayden Kushner Portfolio</div>
      <nav className="site-header__nav">
        <NavLink to="/" end className={navLinkClass}>
          Projects
        </NavLink>
        <NavLink to="/about" className={navLinkClass}>
          About
        </NavLink>
        <a
          href="mailto:braydenkushner@gmail.com"
          className="nav-link"
          style={{ background: "var(--accent)", color: "#fff" }}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
