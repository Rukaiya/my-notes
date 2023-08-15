import { Link } from "react-router-dom";

const ListItem = ({ note }) => {
  console.log(note);
  return (
    <div>
      <Link to={`/notes/${note.id}`}>{note.body} </Link>
    </div>
  )
}

export default ListItem
