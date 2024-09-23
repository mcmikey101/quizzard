import '../styles/navbar.css'
interface NavBarProps {
    routeTo(page: string): void;
}
export default function NavBar(props: NavBarProps) {
    return (
        <>
            <div className="navbar">
                <p className="logo">Quizzard</p>
                <input type="text" placeholder='Search' className="searchbar"/>
                <button onClick={() => props.routeTo('user')} className="profile">Profile</button>
            </div>
        </>
    )
}