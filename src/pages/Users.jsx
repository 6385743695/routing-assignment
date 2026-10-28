import { Link } from "react-router-dom";
import users from "../data/users.js";

function Users() {
  return (
    <main className="page">
      <p className="eyebrow">MEET OUR COMMUNITY</p>
      <h1 className="section-title">User Directory</h1>
      <p className="section-description">
        Explore our users and click a profile to view more details.
      </p>

      <section className="users-grid">
        {users.map((user) => (
          <article className="user-card" key={user.id}>
            <div className="avatar">
              {user.name.split(" ").map((word) => word[0]).join("")}
            </div>

            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <span className="role">{user.role}</span>
            <p>📍 {user.city}</p>

            <Link
              to={`/users/${user.id}`}
              className="primary-button"
            >
              View Profile →
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Users;