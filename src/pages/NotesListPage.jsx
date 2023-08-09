import React from 'react'
import notes from '../assets/data'
import ListItem from '../components/ListItem';
const NotesListPage = () => {
  console.log(notes);
  return (
    <div>
      <div>
      {notes.map((note, index) => (
        <ListItem key={index} note={note} />
      ))}
      </div>
      
    </div>
  )
}

export default NotesListPage
