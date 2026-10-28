import { Link } from "react-router-dom";

function About() {
  return (
    <main className="page">
      <section className="about-card">
        <p className="eyebrow">ABOUT OUR PROJECT</p>

        <h1 className="section-title">
          About <span className="gradient-text">RouteApp</span>
        </h1>

        <p className="section-description">
          RouteApp demonstrates how to build a multi-page React application
          using React Router DOM. Users can navigate between pages without
          a full browser refresh.
        </p>

        <h2>What this project demonstrates</h2>

        <ul className="about-list">
          <li>React component-based architecture</li>
          <li>Client-side navigation using BrowserRouter</li>
          <li>Route configuration with Routes and Route</li>
          <li>Dynamic URLs using route parameters</li>
          <li>Responsive layouts with CSS</li>
          <li>Active navigation links</li>
        </ul>

        <Link to="/users" className="primary-button">
          View User Directory →
        </Link>
      </section>
    </main>
  );
}

export default About;