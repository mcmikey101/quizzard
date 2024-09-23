import { useState } from 'react'
import './styles/App.css'
import Outlet from './comps/Outlet.tsx'
import NavBar from './comps/NavBar.tsx'

function App() {
  const [page, setPage] = useState('home')
  function routeTo(page: string = 'home') {
    setPage(page)
  }
  return (
    <>
      <div className="main">
        <NavBar routeTo={routeTo}/>
        <Outlet page={page} routeTo={routeTo}/>
      </div>
    </>
  )
}

export default App
