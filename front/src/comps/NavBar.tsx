import '../styles/navbar.css'

export default function NavBar() {
    return (
        <>
            <div className="navbar">
                <p className="logo">Quizzard</p>
                <input type="text" placeholder='Search' className="searchbar"/>
                <button className="profile">Profile</button>
            </div>
        </>
    )
}