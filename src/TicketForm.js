import React, { useState } from 'react';
import './ticketForm.css';

const TicketForm = () => {
  const [title, setTitle] = useState("titl");
  const [desc, setDesc] = useState("des");
  const [priority, setPriority] = useState(1);

  const priority_Labels = {
    1: "Low",
    2: "Medium",
    3: "High"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ticketInfo = {
      id: new Date().toISOString(),
      title,
      desc,
      priority
    };
    console.log(ticketInfo);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="ticket-form">
        <label>Title:</label>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>

        <label>Priority:</label>
        <div className="priority-options">
          {Object.entries(priority_Labels).map(([id, label]) => (
            <label key={id}>
              <input
                type='radio'
                name='priority'
                value={id}
                checked={Number(id) === priority}
                onChange={(e) => setPriority(Number(e.target.value))}
              />{" "}
              {label}
            </label>
          ))}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TicketForm;
