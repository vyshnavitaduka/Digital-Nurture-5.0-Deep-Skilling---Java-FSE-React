import React, { useState } from "react";

// GUESSED CONTENT: custom file name/content wasn't visible in the screenshot.
// Placeholder based on folder name "cohortdashboard" — replace with your real component.
// Note: Exercise-18 is a separate, unit-tested version of a similar dashboard.

const cohorts = [
  { id: 1, name: "Java FSE - Batch 2026-A", students: 32 },
  { id: 2, name: "Java FSE - Batch 2026-B", students: 28 },
];

function Cohort() {
  const [selectedId, setSelectedId] = useState(null);
  const selected = cohorts.find((c) => c.id === selectedId);

  return (
    <div>
      <h2>Cohort Dashboard</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {cohorts.map((c) => (
          <li key={c.id}>
            <button onClick={() => setSelectedId(c.id)}>{c.name}</button>
          </li>
        ))}
      </ul>
      {selected && (
        <div>
          <h3>{selected.name}</h3>
          <p>Students: {selected.students}</p>
        </div>
      )}
    </div>
  );
}

export default Cohort;
