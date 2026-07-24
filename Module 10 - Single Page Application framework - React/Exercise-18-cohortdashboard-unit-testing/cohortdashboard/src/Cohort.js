import React, { useState } from "react";
import CohortDetails from "./CohortDetails";

const cohorts = [
  { id: 1, name: "Java FSE - Batch 2026-A", students: 32, startDate: "2026-01-15" },
  { id: 2, name: "Java FSE - Batch 2026-B", students: 28, startDate: "2026-03-01" },
  { id: 3, name: "Java FSE - Batch 2026-C", students: 30, startDate: "2026-05-10" },
];

function Cohort() {
  const [selectedId, setSelectedId] = useState(null);

  const selectedCohort = cohorts.find((c) => c.id === selectedId);

  return (
    <div>
      <h2>Cohort Dashboard</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {cohorts.map((cohort) => (
          <li key={cohort.id}>
            <button onClick={() => setSelectedId(cohort.id)}>
              {cohort.name}
            </button>
          </li>
        ))}
      </ul>

      {selectedCohort && <CohortDetails cohort={selectedCohort} />}
    </div>
  );
}

export default Cohort;
