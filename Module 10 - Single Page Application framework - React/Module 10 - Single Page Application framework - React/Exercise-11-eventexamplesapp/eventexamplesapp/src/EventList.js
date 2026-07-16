import React from "react";

// GUESSED CONTENT: custom file name wasn't visible in screenshots.
// Placeholder based on folder name "eventexamplesapp" — replace with your real component.

const events = [
  { id: 1, title: "React Workshop", date: "2026-08-01" },
  { id: 2, title: "Spring Boot Bootcamp", date: "2026-08-15" },
  { id: 3, title: "Career Fair", date: "2026-09-01" },
];

function EventList() {
  const handleClick = (event) => {
    alert(`You clicked on: ${event.title}`);
  };

  return (
    <div>
      <h2>Upcoming Events</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {events.map((event) => (
          <li key={event.id} onClick={() => handleClick(event)} style={{ cursor: "pointer" }}>
            <strong>{event.title}</strong> — {event.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
