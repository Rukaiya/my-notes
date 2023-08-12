import { useParams } from 'react-router-dom'
import notes from '../assets/data'

const NotePage = () => {
  let noteId = useParams();
  // let note = notes.find(note => note.id === Number(noteId))
  console.log(noteId);
  console.log(Number(noteId));
  return (
    <div>
      {/* <p>{note.body}</p> */}
    </div>
  )
}

export default NotePage
