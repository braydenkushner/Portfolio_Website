import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// React Router doesn't reset scroll position on navigation by default, so
// clicking a link (footer, project cards, nav) while scrolled down lands you
// at the same scroll offset on the new page instead of the top. This fixes it.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
