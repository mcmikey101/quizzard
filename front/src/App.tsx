import './styles/App.css'
import './comps/NavBar.tsx'
import ScrollPage from './comps/scrollpage.tsx'
import NavBar from './comps/NavBar.tsx'

function App() {
  return (
    <>
      <div className="main">
        <NavBar/>
        <ScrollPage/>
      </div>
    </>
  )
}

export default App
