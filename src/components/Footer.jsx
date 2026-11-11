import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <span>&copy; Brayden Kushner — 2026</span>
      <div className="site-footer__links">
        <Link to="/">Projects</Link>
        <Link to="/about">About</Link>
      </div>
    </footer>
  );
}
