import './styles/App.css'
import './comps/NavBar.tsx'
import NavBar from './comps/NavBar.tsx'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>  
      <NavBar/>
      <div className="main">
        <div className='outlet'>
          <Outlet/>
        </div>
      </div>
    </>
  )
}

export default App
