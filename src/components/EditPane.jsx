import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const NoteCard = ({ note, notes, setNotes }) => {
  const deleteNote = () => {
    let updatedNotes = [...notes];
    updatedNotes.splice(updatedNotes.indexOf(note), 1);
    setNotes(updatedNotes);
  };

  return (
    <div className="shadow-lg p-2 w-full bg-neutral-100 rounded-lg text-lg flex">
      <div className="flex-1 break-all">{note}</div>
      <IoClose
        onClick={() => deleteNote()}
        className="text-neutral-500 cursor-pointer"
      />
    </div>
  );
};

const EditPane = () => {
  const [notes, setNotes] = useState(["abc", "new note"]);
  const [addNotes, setAddNotes] = useState(false);
  const [newNote, setNewNote] = useState("");

  const addNote = () => {
    if (newNote !== "") {
      setNotes([...notes, newNote]);
      setAddNotes(false);
    }
  };

  return (
    <div className="md:min-h-[91vh] max-h-screen w-[20vw] bg-neutral-200 shadow-lg flex flex-col items-center max-md:w-full max-md:h-fit">
      <div className="text-2xl w-full text-center text-[#00d4ad] py-4 rounded-lg shadow-lg">
        Notepad
      </div>
      <div className="w-full h-[2px] bg-[#00d4ad]" />
      <div className="flex flex-col items-center h-full w-full px-4">
        <div className="w-full py-4 flex flex-col gap-4 flex-1">
          {notes.map((note, index) => (
            <NoteCard
              key={index}
              note={note}
              notes={notes}
              setNotes={setNotes}
            />
          ))}
        </div>
        {addNotes && (
          <div className="w-full flex flex-col items-end bg-neutral-100 rounded-lg shadow-lg mb-4 ">
            <textarea
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              placeholder="Type Note here..."
              className="bg-neutral-100 rounded-lg w-full h-[200px] outline-none p-2"
            />
            <button
              onClick={() => addNote()}
              className="my-2 mr-2 border-2 border-[#00d4ad] px-3 py-1 rounded-lg text-[#00d4ad]"
            >
              Add
            </button>
          </div>
        )}
        <button
          onClick={() => setAddNotes(!addNotes)}
          className="bg-[#00d4ad] px-4 py-2 rounded-lg text-xl text-neutral-100 self-end mr-4 mb-4"
        >
          Add Note
        </button>
      </div>
    </div>
  );
};

export default EditPane;
