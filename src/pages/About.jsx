import { useState } from "react";
import { experience } from "../data/experience";
import { projects } from "../data/projects";
import { organizations } from "../data/organizations";
import { skills } from "../data/skills";
import { honors, certificates } from "../data/honorsAndCertificates";
import CollapsibleSection from "../components/CollapsibleSection";

export default function About() {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <div className="main">
      {/* hero: photo -> name -> role -> bio -> links */}
      <div className="hero">
        {photoFailed ? (
          <div className="hero__photo">[photo]</div>
        ) : (
          <a href="/images/headshot.jpg" target="_blank" rel="noopener noreferrer">
            <img
              className="hero__photo"
              src="/images/headshot.jpg"
              alt="Brayden Kushner"
              onError={() => setPhotoFailed(true)}
            />
          </a>
        )}
        <div>
          <h1>Brayden Kushner</h1>
          <div className="hero__role">
            Incoming Analog &amp; Power Electrical Engineer at Raytheon
          </div>
          <p className="hero__bio">
            I am a Senior at Penn State University pursuing a Bachelor of
            Science in Computer Engineering and a minor in Cybersecurity. My
            recent work spans embedded systems, analog and power electronics,
            and control &mdash; from a nuclear-cybersecurity
            hardware-in-the-loop kit to hands-on power equipment experience at
            Bechtel.
          </p>
        </div>
        <div className="button-row">
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

      {/* resume */}
      <div className="section">
        <div className="section-row">
          <h2>Resume</h2>
          <a href="/resume.pdf" download className="btn btn--primary btn--small">
            Download
          </a>
        </div>
        <div className="resume-preview">
          <iframe title="Resume preview" src="/resume.pdf" />
        </div>
      </div>

      {/* experience */}
      <div className="section">
        <h2>Experience</h2>
        <div className="card-list">
          {experience.map((job) => (
            <a
              key={job.company}
              href={job.url}
              className="card card--row"
            >
              <div>
                <div className="card__title">{job.company}</div>
                <div className="card__meta">{job.role}</div>
              </div>
              <div className="card__side">
                {job.location}
                <br />
                {job.date}
              </div>
            </a>
          ))}
        </div>
        <div className="section-note">
          template card, repeats per role — add entries in src/data/experience.js
        </div>
      </div>

      {/* projects */}
      <div className="section">
        <h2>Projects</h2>
        <div className="card-list">
          {projects.map((project) => (
            <a key={project.id} href={`/projects/${project.id}`} className="card">
              <div className="card__title">{project.title}</div>
              <div className="card__meta">{project.summary}</div>
              <div className="card__date">{project.date}</div>
            </a>
          ))}
        </div>
        <div className="section-note">
          template card, repeats per project — add entries in src/data/projects.js
        </div>
      </div>

      {/* organizations & activities */}
      <div className="section">
        <h2>Organizations &amp; Activities</h2>
        <div className="card-list">
          {organizations.map((org) => (
            <div key={org.title} className="card">
              <div className="card__title">{org.title}</div>
              <div className="card__meta">
                {org.role} &middot; {org.date}
              </div>
              <div className="card__meta" style={{ marginTop: 8 }}>
                {org.summary}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* honors & awards (hidden/collapsed) */}
      <CollapsibleSection title="Honors & Awards">
        {honors.map((h, i) => (
          <div key={i} className="collapsible__item">
            <strong>{h.title}</strong> &mdash;{" "}
            <span style={{ color: "var(--text-dim)" }}>{h.summary}</span>
          </div>
        ))}
      </CollapsibleSection>

      {/* licenses & certificates (hidden/collapsed) */}
      <CollapsibleSection title="Licenses & Certificates">
        {certificates.map((c, i) => (
          <div key={i} className="cert-row">
            <div className="collapsible__item">
              <strong>{c.title}</strong> &mdash;{" "}
              <span style={{ color: "var(--text-dim)" }}>{c.summary}</span>
            </div>
            <a href={c.pdfUrl} className="btn btn--outline btn--small">
              See PDF
            </a>
          </div>
        ))}
      </CollapsibleSection>

      {/* skills */}
      <div className="section">
        <h2>Skills</h2>
        <div className="skills-list">
          {skills.map((row) => (
            <div key={row.category}>
              <span className="label">{row.category}</span>
              &nbsp;&nbsp;
              {row.items.join(", ")}
            </div>
          ))}
        </div>
      </div>

      {/* contact */}
      <div className="contact-card">
        <h2>Want to get in touch?</h2>
        <p>If you have any questions, feel free to reach out!</p>
        <a href="mailto:braydenkushner@gmail.com" className="btn btn--primary">
          braydenkushner@gmail.com
        </a>
      </div>
    </div>
  );
}
