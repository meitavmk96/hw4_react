import React from 'react'
import Note from './Note';
import { View } from 'react-native';

export default function NoteList(props) {
  return (
    <View >
      {props.NotesArray.map((note, key) => (
        <Note
          id={note.id}
          name={note.name}
          title={note.title}
          content={note.content}
          date={note.date}
          key={note.id}
        />
      ))}
    </View>
  )
}
