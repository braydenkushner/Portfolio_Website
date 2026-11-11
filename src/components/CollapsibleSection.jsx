import { useState } from "react";

export default function CollapsibleSection({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="section">
      <button
        type="button"
        className="collapsible__header"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <h2>{title}</h2>
        <svg
          className={"collapsible__chevron" + (open ? " is-open" : "")}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && <div className="collapsible__body">{children}</div>}
    </div>
  );
}
