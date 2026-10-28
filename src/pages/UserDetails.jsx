import { Link, useParams } from "react-router-dom";
import users from "../data/users.js";

function UserDetails() {
  const { id } = useParams();
  const user = users.find((item) => item.id === Number(id));

  if (!user) {
    return (
      <main className="page">
        <section className="user-details-card">
          <h1>User Not Found</h1>
          <p className="section-description">
            No user exists with this ID.
          </p>
          <Link to="/users" className="primary-button">
            ← Back to Users
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="page">
      <section className="user-details-card">
        <div className="avatar large-avatar">
          {user.name.split(" ").map((word) => word[0]).join("")}
        </div>

        <p className="eyebrow">USER PROFILE</p>
        <h1 className="section-title">{user.name}</h1>
        <span className="role">{user.role}</span>

        <div className="details-list">
          <p><strong>User ID:</strong> {user.id}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>City:</strong> {user.city}</p>
          <p><strong>Role:</strong> {user.role}</p>
        </div>

        <Link to="/users" className="primary-button">
          ← Back to Users
        </Link>
      </section>
    </main>
  );
}

export default UserDetails;