import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage'

function App() {

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<NotesListPage/>} />
          <Route path='/notes/:id' element={<NotePage/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
