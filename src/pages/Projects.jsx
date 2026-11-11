import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectImage({ project }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <div className="project-card__image">[picture]</div>;
  }
  return (
    <div className="project-card__image">
      <img src={project.image} alt={project.title} onError={() => setFailed(true)} />
    </div>
  );
}

export default function Projects() {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <div className="main main--wide">
      {/* hero: photo -> current role -> focus -> education -> links */}
      <div className="hero">
        {photoFailed ? (
          <div className="hero__photo hero__photo--sm">[photo]</div>
        ) : (
          <a href="/images/headshot.jpg" target="_blank" rel="noopener noreferrer">
            <img
              className="hero__photo hero__photo--sm"
              src="/images/headshot.jpg"
              alt="Brayden Kushner"
              onError={() => setPhotoFailed(true)}
            />
          </a>
        )}
        <div className="hero__role">
          Incoming Analog &amp; Power Electrical Engineer at Raytheon
        </div>
        <div className="hero__line">
          Focused on embedded systems, analog and power electronics, and
          controls.
        </div>
        <div className="hero__line">
          Pursuing a Bachelor of Science in Computer Engineering at Penn
          State University, with a minor in Cybersecurity.
        </div>
        <div className="button-row" style={{ marginTop: 10 }}>
          <a
            href="https://www.linkedin.com/in/braydenkushner/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
          >
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            Resume
          </a>
        </div>
      </div>

      <div className="projects-lede">Click a project to learn more!</div>

      {/* project grid: repeating template card */}
      <div className="project-grid">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="project-card"
          >
            <ProjectImage project={project} />
            <div className="project-card__body">
              <div className="project-card__title">{project.title}</div>
              <div className="project-card__date">{project.date}</div>
            </div>
          </Link>
        ))}
      </div>
      <div className="section-note" style={{ textAlign: "center" }}>
        grid repeats this template card for however many projects there are —
        add entries in src/data/projects.js
      </div>
    </div>
  );
}
