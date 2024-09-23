import '../styles/navbar.css'
import { Link } from 'react-router-dom'
export default function NavBar() {
    return (
        <>
            <div className="navbar">
                <p className="logo">Quizzard</p>
                <input type="text" placeholder='Search' className="searchbar"/>
                <button className="profile">
                    <Link to='/user'>Profile</Link>
                </button>
            </div>
        </>
    )
}