import { useState, useEffect} from 'react'
import ListItem from '../components/ListItem';
import AddButton from '../components/AddButton'
const NotesListPage = () => {
  let [ notes, setNotes ] = useState([])

  useEffect(() => {
    getNotes()
  },[])

  let getNotes = async () => {
    let response = await fetch('http://localhost:3000/notes')
    let data = await response.json()
    setNotes(data)
  }

  return (
    <div>
      <div>
        <AddButton />
      {notes.map((note, index) => (
        <ListItem key={index} note={note} />
      ))}
      </div>
      
    </div>
  )
}

export default NotesListPage
