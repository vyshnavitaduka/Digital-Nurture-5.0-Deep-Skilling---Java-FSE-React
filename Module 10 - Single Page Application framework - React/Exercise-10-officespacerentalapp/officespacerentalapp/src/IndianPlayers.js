import React from "react";

const players = [
  { id: 1, name: "Virat Kohli", role: "Batsman" },
  { id: 2, name: "Jasprit Bumrah", role: "Bowler" },
  { id: 3, name: "Ravindra Jadeja", role: "All-rounder" },
  { id: 4, name: "Rohit Sharma", role: "Batsman" },
];

function IndianPlayers() {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {players.map((player) => (
        <li key={player.id}>
          <strong>{player.name}</strong> — {player.role}
        </li>
      ))}
    </ul>
  );
}

export default IndianPlayers;
