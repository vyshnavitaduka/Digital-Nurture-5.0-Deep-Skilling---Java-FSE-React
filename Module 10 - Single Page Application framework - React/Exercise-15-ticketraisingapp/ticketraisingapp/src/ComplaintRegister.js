import React, { useState } from "react";

function ComplaintRegister() {
  const [complaints, setComplaints] = useState([]);
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!subject.trim() || !description.trim()) return;

    const newComplaint = {
      id: Date.now(),
      subject,
      description,
      status: "Open",
    };
    setComplaints([...complaints, newComplaint]);
    setSubject("");
    setDescription("");
  };

  return (
    <div>
      <h2>Raise a Complaint</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Subject: </label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description: </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Complaint</button>
      </form>

      <h3>Your Complaints</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {complaints.map((c) => (
          <li key={c.id}>
            <strong>{c.subject}</strong> — {c.description} ({c.status})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ComplaintRegister;
