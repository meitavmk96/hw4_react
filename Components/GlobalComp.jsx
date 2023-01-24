import React, { createContext, useState } from 'react';
import { format } from 'date-fns';

export const GlobalContext = createContext()

export default function GlobalComp(props) {

  const DefaultInitCategoryList = //רשימת הקטגרויות
    [{ id: 1, name: "Personal" },
    { id: 2, name: "Work" },
    { id: 3, name: "Ideas" }];

  const [CategoryArrContext, setCategoryArrContext] = useState(DefaultInitCategoryList);

  const AddCategory = (category) => {
    let newItem = {
      id: CategoryArrContext.length + 1,
      name: category
    };
    setCategoryArrContext([...CategoryArrContext, newItem]);
  }

  const DefaultInitNotesList = [
    {
      id: 1,
      category: "Personal",
      title: "Shopping List",
      content: "2 Sugar, eggs, chocolate",
      date: "15/01/2023",
    },
    {
      id: 2,
      category: "Work",
      title: "Checklist",
      content: "call my manger",
      date: "14/01/2023",
    },
    {
      id: 3,
      category: "Ideas",
      title: "Final Project",
      content: "develop new app",
      date: "13/01/2023",
    },
    {
      id: 4,
      category: "Personal",
      title: "Call",
      content: "To call my aunt's house in Norway and call my little sister",
      date: "12/01/2023",
    },
  ];

  const [NoteArrContext, setNoteArrContext] = useState(DefaultInitNotesList);
  const [NotesCounter, setNotesCounter] = useState(NoteArrContext.length + 1);

  const AddNote = (categoryName, title, note) => {
    const currentDate = new Date();
    const date = format(currentDate, 'dd/mm/yyyy');

    const NewNote = {
      id: NotesCounter,
      category: categoryName,
      title: title,
      content: note,
      date: date,
    };
    setNoteArrContext([...NoteArrContext, NewNote]);
    setNotesCounter(NotesCounter + 1);
  }

  const DeleteNote = (noteId) => {
    setNoteArrContext(NoteArrContext.filter((note) => note.id !== noteId));
  }

  return (
    <GlobalContext.Provider
      value={{ CategoryArrContext, AddCategory, NoteArrContext, DeleteNote , AddNote }}>
      {props.children}
    </GlobalContext.Provider>
  )
}
