// src/components/Profile.jsx
import { useAuth } from './AuthContext';

function Profile() {
  const { user } = useAuth();

  return (
    <div className="container mt-5">
      <h1>Profile</h1>
      {user && (
        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text">Email: {user.email}</p>
            {/* Add more user details as needed */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;