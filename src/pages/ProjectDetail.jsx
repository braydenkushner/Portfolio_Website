import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

function FeatureList({ features }) {
  if (!features || features.length === 0) return null;
  return (
    <ul className="feature-list">
      {features.map((feature, i) => (
        <li key={i}>{feature}</li>
      ))}
    </ul>
  );
}

function Skills({ skills }) {
  if (!skills) return null;
  return (
    <p className="skills-line">
      <strong>Skills demonstrated: </strong>
      {skills}
    </p>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const [imageFailed, setImageFailed] = useState(false);
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="main">
        <p>Project not found.</p>
        <Link to="/">Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="main">
      <div className="section-row">
        <h2 style={{ fontSize: 28 }}>{project.title}</h2>
        <a href="#" className="btn btn--outline btn--small">
          See Document
        </a>
      </div>

      <div className="detail-meta">
        <div>
          <strong>Date</strong>
          {project.date}
        </div>
      </div>

      {imageFailed ? (
        <div className="detail-image">[pictures]</div>
      ) : (
        <div className="detail-image">
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImageFailed(true)}
          />
        </div>
      )}

      <div className="section">
        <h2>Overview</h2>
        <p style={{ color: "var(--text-dim)", lineHeight: 1.65 }}>
          {project.overview}
        </p>
        <FeatureList features={project.features} />
        <Skills skills={project.skills} />
      </div>

      {/* Sub-projects: rendered when a project (e.g. a multi-part course or
          internship) bundles a few distinct pieces of work together. Add or
          remove entries in this project's `subprojects` array in
          src/data/projects.js — no changes needed here. */}
      {project.subprojects && project.subprojects.length > 0 && (
        <div className="section">
          <h2>What's inside</h2>
          <div className="card-list">
            {project.subprojects.map((sub) => (
              <div key={sub.title} className="card subproject-card">
                <div className="card__title" style={{ fontSize: 17 }}>
                  {sub.title}
                </div>
                {sub.tagline && (
                  <p className="subproject-card__tagline">{sub.tagline}</p>
                )}
                {sub.description && (
                  <p style={{ color: "var(--text-dim)", lineHeight: 1.6 }}>
                    {sub.description}
                  </p>
                )}
                <FeatureList features={sub.features} />
                <Skills skills={sub.skills} />
              </div>
            ))}
          </div>
        </div>
      )}

      <Link to="/">&larr; Back to all projects</Link>
    </div>
  );
}
