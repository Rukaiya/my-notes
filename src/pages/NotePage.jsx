import { Link, useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import notes from '../assets/data'

const NotePage = () => {
  let { id: noteId } = useParams();
  const navigate = useNavigate();
  // let note = notes.find(note => note.id === Number(noteId))
  let [note, setNote] = useState(null)

  useEffect(() => {
    getNote()
  }, [noteId])

  let getNote = async () => {
    if (noteId === 'new') return
    let response = await fetch(`http://localhost:3000/notes/${noteId}`)
    let data = await response.json()
    setNote(data)
  }

  let updateNote = () => {
    fetch(`http://localhost:3000/notes/${noteId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...note, 'updated': new Date() })
    })
  }

  let deleteNote = () => {
    fetch(`http://localhost:3000/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
    })
    navigate('/')
  }

  let handleSubmit = () => {
    if (noteId !== 'new') {
      if ( !note.body) deleteNote()
      else  updateNote()
      
    }
    else {
      if (note !== null) createNote()
    }
  }

  let createNote = () => {
    fetch(`http://localhost:3000/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...note, 'updated': new Date() })
    })
  }

  return (
    <div>
      <div>
        <Link to={'/'}>
          <p onClick={handleSubmit}><span>&#8592;</span> Back</p>
        </Link>

        <button onClick={deleteNote}>Delete</button>
      </div>

      <p>{note?.body}</p>
      <textarea onChange={(e) => { setNote({ ...note, 'body': e.target.value }) }} value={note?.body}></textarea>
    </div>
  )
}

export default NotePage
