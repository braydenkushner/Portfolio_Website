import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { experience } from "../data/experience";
import { projects } from "../data/projects";
import { organizations } from "../data/organizations";
import { skills } from "../data/skills";

export default function About() {
  const [photoFailed, setPhotoFailed] = useState(false);
  const nameRef = useRef(null);
  const [photoSize, setPhotoSize] = useState(160);

  // Keep the headshot the same width as the "Brayden Kushner" heading below it.
  useEffect(() => {
    const el = nameRef.current;
    if (!el) return undefined;
    const update = () => setPhotoSize(el.getBoundingClientRect().width);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="main">
      {/* hero: photo -> name -> role -> bio -> links */}
      <div className="hero">
        {photoFailed ? (
          <div
            className="hero__photo"
            style={{ width: photoSize, height: photoSize, borderRadius: photoSize * 0.18 }}
          >
            [photo]
          </div>
        ) : (
          <a href="/images/headshot.jpg" target="_blank" rel="noopener noreferrer">
            <img
              className="hero__photo"
              style={{ width: photoSize, height: photoSize, borderRadius: photoSize * 0.18 }}
              src="/images/headshot.jpg"
              alt="Brayden Kushner"
              onError={() => setPhotoFailed(true)}
            />
          </a>
        )}
        <div>
          <h1 ref={nameRef}>Brayden Kushner</h1>
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
              target="_blank"
              rel="noopener noreferrer"
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
            <Link key={project.id} to={`/projects/${project.id}`} className="card">
              <div className="card__title">{project.title}</div>
              <div className="card__meta">{project.summary}</div>
              <div className="card__date">{project.date}</div>
            </Link>
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

      {/* skills & interests */}
      <div className="section">
        <h2>Skills and Interests</h2>
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
