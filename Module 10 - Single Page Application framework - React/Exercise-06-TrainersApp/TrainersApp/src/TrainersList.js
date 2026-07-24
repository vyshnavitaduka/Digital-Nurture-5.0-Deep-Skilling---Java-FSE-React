import React from "react";

// GUESSED CONTENT: custom file name/content wasn't visible in the screenshot.
// Placeholder based on folder name "TrainersApp" — replace with your real component.

const trainers = [
  { id: 1, name: "Ramesh Kumar", expertise: "Java & Spring Boot" },
  { id: 2, name: "Sunitha Iyer", expertise: "React & Frontend" },
  { id: 3, name: "Arjun Mehta", expertise: "Databases & SQL" },
];

function TrainersList() {
  return (
    <div>
      <h2>Trainers</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {trainers.map((t) => (
          <li key={t.id}>
            <strong>{t.name}</strong> — {t.expertise}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrainersList;
