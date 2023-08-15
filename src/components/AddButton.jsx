import { Link } from 'react-router-dom'
const AddButton = () => {
  return (
    <div>
      <Link to={'/notes/new'}>
        <span>&#43;</span>
      </Link>
    </div>
  )
}

export default AddButton
