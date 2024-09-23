import '../styles/userpage.css'
import { Link } from 'react-router-dom'

export default function UserPage() {
    return (
        <>
            <div className="userpage">
                <div className="backcont">
                    <button className="back">
                        <Link to='/'>Back</Link>
                    </button>
                </div>
                <div className="userinfo">
                    <div className="sections"></div>
                    <div className="useroutlet"></div>    
                </div> 
            </div>
        </>
    )
}