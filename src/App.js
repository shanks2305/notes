import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Notes from "./components/Notes";
import { v4 as uuidv4 } from "uuid";
import { join } from "path";

const App = () => {
  const [notes, setNotes] = useState([]);
  const addNote = (val) => {
    setNotes([
      ...notes,
      {
        id: uuidv4(),
        text: val,
      },
    ]);
  };

  useEffect(() => {
    let localNotes = localStorage.getItem("notes");
    console.log(localNotes);
    if (localNotes) {
      setNotes(JSON.parse(localNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const removeNote = (id) => {
    setNotes(notes.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-8  bg-dark offset-md-2">
            <Form addNote={addNote} />
          </div>
        </div>
      </div>
      <div className="container">
        <div>
          <Notes notes={notes} removeNote={removeNote} />
        </div>
      </div>
    </div>
  );
};

export default App;
