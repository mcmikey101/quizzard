import '../styles/userpage.css'

interface UserPageProps {
    routeTo(page: string): void;
}

export default function UserPage(props: UserPageProps) {
    return (
        <>
            <p>UserPage</p>
            <div className="userpage">
                <div className="backcont">
                    <button className="back" onClick={() => props.routeTo('home')}>Back</button>
                </div>
                <div className="userinfo">
                    <div className="sections"></div>
                    <div className="useroutlet"></div>    
                </div> 
            </div>
        </>
    )
}