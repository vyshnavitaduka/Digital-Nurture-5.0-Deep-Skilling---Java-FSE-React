import React from "react";

// GUESSED CONTENT: custom file name/content wasn't visible in the screenshot.
// Placeholder based on folder name "StudentApp" — replace with your real component.

const students = [
  { id: 1, name: "Asha Rao", grade: "A", course: "Java Full Stack" },
  { id: 2, name: "Vikram Shah", grade: "B+", course: "Java Full Stack" },
];

function StudentCard() {
  return (
    <div>
      <h2>Student App</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {students.map((s) => (
          <li key={s.id}>
            <strong>{s.name}</strong> — Grade: {s.grade} — {s.course}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentCard;
