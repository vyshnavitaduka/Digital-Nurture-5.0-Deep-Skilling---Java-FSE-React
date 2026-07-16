import React, { useState } from "react";

// GUESSED CONTENT: your screenshots scrolled past this exercise's custom
// component before showing its file name. This is a placeholder based on
// the folder name "cricketapp" — replace with your real component.

function CricketScoreboard() {
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);

  return (
    <div>
      <h2>Cricket Scoreboard</h2>
      <div>
        <h3>Team A: {team1Score}</h3>
        <button onClick={() => setTeam1Score(team1Score + 1)}>+1 Run</button>
        <button onClick={() => setTeam1Score(team1Score + 4)}>+4 Runs</button>
        <button onClick={() => setTeam1Score(team1Score + 6)}>+6 Runs</button>
      </div>
      <div>
        <h3>Team B: {team2Score}</h3>
        <button onClick={() => setTeam2Score(team2Score + 1)}>+1 Run</button>
        <button onClick={() => setTeam2Score(team2Score + 4)}>+4 Runs</button>
        <button onClick={() => setTeam2Score(team2Score + 6)}>+6 Runs</button>
      </div>
    </div>
  );
}

export default CricketScoreboard;
