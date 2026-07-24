import React, { useState } from "react";

// GUESSED CONTENT: custom file name/content wasn't visible in the screenshot.
// Placeholder based on folder name "scorecalculatorapp" — replace with your real component.

function ScoreCalculator() {
  const [scores, setScores] = useState([]);
  const [input, setInput] = useState("");

  const addScore = () => {
    const value = Number(input);
    if (!isNaN(value)) {
      setScores([...scores, value]);
      setInput("");
    }
  };

  const average = scores.length
    ? (scores.reduce((sum, s) => sum + s, 0) / scores.length).toFixed(2)
    : 0;

  return (
    <div>
      <h2>Score Calculator</h2>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a score"
      />
      <button onClick={addScore}>Add Score</button>
      <p>Scores: {scores.join(", ")}</p>
      <p>Average: {average}</p>
    </div>
  );
}

export default ScoreCalculator;
