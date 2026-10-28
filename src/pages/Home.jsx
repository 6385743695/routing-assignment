import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">WELCOME TO ROUTEAPP</p>
        <h1>
          Explore the power of <span>React Routing</span>
        </h1>
        <p>
          A modern multi-page application built with React and React Router.
          Explore our pages, browse users, and view individual profiles
          without reloading the website.
        </p>

        <div className="hero-buttons">
          <Link to="/users" className="primary-button">
            Explore Users →
          </Link>
          <Link to="/about" className="secondary-button">
            Learn More
          </Link>
        </div>
      </section>

      <section className="feature-grid">
        <Link to="/about" className="feature-card">
          <div className="feature-icon">🧭</div>
          <h3>Easy Navigation</h3>
          <p>Learn how navigation works in React Router.</p>
          <span className="card-link">Learn more →</span>
        </Link>

        <Link to="/users" className="feature-card">
          <div className="feature-icon">👥</div>
          <h3>User Directory</h3>
          <p>Browse users and explore their information.</p>
          <span className="card-link">View users →</span>
        </Link>

        <Link to="/users/1" className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Dynamic Routes</h3>
          <p>Open an individual profile using a dynamic URL.</p>
          <span className="card-link">View profile →</span>
        </Link>
      </section>
    </main>
  );
}

export default Home;