import { Link } from "react-router-dom";

const ListItem = ({ note }) => {
  return (
    <div>
      {note.body}
    </div>
  )
}

export default ListItem
