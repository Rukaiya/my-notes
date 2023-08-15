import { Link } from "react-router-dom";

let getTitle = (note) => {
  const title = note.body.split('\n')[0]
  if (title.length > 45) return title.slice(0, 45)
  return title
}

let getDate = (note) => {
  return new Date(note.updated).toLocaleDateString()
}

let getContent = (note) => {
  let title = getTitle(note)
  console.log('after title');
  let content = note.body.replaceAll('\n', ' ')
  content = content.replaceAll(title, '')
  
  if(content.length > 45) return content.slice(0, 45)
  else return content
}

const ListItem = ({ note }) => {
  return (
    <div>
      <Link to={`/notes/${note.id}`}>
        <h3>{getTitle(note)}</h3>
        <p><span>{getDate(note)}</span>{getContent(note)}</p>
      </Link>
    </div>
  )
}

export default ListItem
