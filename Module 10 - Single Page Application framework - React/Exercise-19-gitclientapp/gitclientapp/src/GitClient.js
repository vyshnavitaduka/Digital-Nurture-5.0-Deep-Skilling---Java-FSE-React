import React, { useState } from "react";

function GitClient() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  const fetchUser = async () => {
    setError("");
    setUserData(null);
    if (!username.trim()) {
      setError("Please enter a GitHub username.");
      return;
    }
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      setUserData(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>GitHub Client</h2>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={fetchUser}>Search</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {userData && (
        <div>
          <img src={userData.avatar_url} alt={userData.login} width="100" />
          <h3>{userData.name || userData.login}</h3>
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
          <p>Public Repos: {userData.public_repos}</p>
          <a href={userData.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default GitClient;
