import React, { Fragment } from "react";

const Notes = ({ notes, removeNote }) => {
  return (
    <div className="row mt-5">
      {notes.length &&
        notes.map((note, index) => (
          <div className="col-md-3 bg-dark m-1" key={index}>
            <h3 className="display-4 text-info">Note</h3>
            <p className="lead">{note.text}</p>
            <button
              onClick={() => removeNote(note.id)}
              className="btn btn-warning float-center"
            >
              Remove
            </button>
          </div>
        ))}
    </div>
  );
};

export default Notes;
