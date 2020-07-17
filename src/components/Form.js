import React, { useState } from "react";

const Form = ({ addNote }) => {
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note === "") {
      alert("no notes to add");
    } else {
      addNote(note);
      setNote("");
    }
  };

  return (
    <form>
      <div className="form-group">
        <label>Add Note</label>
        <input
          className="form-control"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          type="text"
          placeholder="Enter a note you want to save"
          required
        />
        <button onClick={handleSubmit} className=" mt-1 mb-1 btn btn-success">
          Add Note
        </button>
      </div>
    </form>
  );
};

export default Form;
