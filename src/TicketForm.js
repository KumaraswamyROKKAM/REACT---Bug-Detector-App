import React, { useEffect, useState } from 'react';
import './ticketForm.css';

const TicketForm = ({dispatch , isEdit, setIsEdit, editItem, setEditItem}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [priority, setPriority] = useState(1);

  useEffect(()=>
  {
     if(isEdit && editItem)
     {
    setTitle(editItem.title)
    setDesc(editItem.desc)
    setPriority(editItem.priority)
     }
     else
     clearForm();
  },[isEdit,editItem])

  const clearForm  = () =>
  {
    setTitle("");
    setDesc("");
    setPriority(1);
    setIsEdit(false);
    setEditItem();
  }

  const priority_Labels = {
    1: "Low",
    2: "Medium",
    3: "High"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    const ticketInfo = {
      id: isEdit ? editItem.id : new Date().toISOString(),
      title,
      desc,
      priority
    };
    console.log(ticketInfo);
      
    dispatch({
      type: isEdit ?"UPDATE_TICKET":"ADD_TICKET",
      payload: ticketInfo,
    })
    clearForm()
  };

  const handleCancel = () =>
  {
    clearForm();

  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="ticket-form">
        <label>Title:</label>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Description:</label>
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
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
                required
              />{" "}
              {label}
            </label>
          ))}
        </div>

        <button type="submit">{isEdit? "Save" :"Submit"} </button>
        {isEdit ? <button onClick={handleCancel}>cancel Edit</button> : <></>}
        
      </form>
    </div>
  );
};

export default TicketForm;
