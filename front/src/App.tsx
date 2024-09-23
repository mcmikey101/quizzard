import './styles/App.css'
import './comps/NavBar.tsx'
import NavBar from './comps/NavBar.tsx'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="main">
        <NavBar/>
        <Outlet/>
      </div>
    </>
  )
}

export default App
