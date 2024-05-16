import { action } from "easy-peasy";
import uuid from "uuid";
export default{
    notes: [],
    setNotes: action((state, notes)=>
   { state.note= notes;}
    ),
    addNote: action((state, note) =>{
        note.id = uuid.v4();
        state.note.push(note)
    }
    ),

    toggleNote: action((state, id) => {
        state.notes.forEach((note) => {
          return note.id === id ? (note.completed = !note.completed) : note;
        });
      }),
      removeNote: action((state, id) => {
        state.notes = state.notes.filter((note) => note.id !== id);
      })
    };









