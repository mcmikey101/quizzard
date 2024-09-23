import ScrollPage from "./ScrollPage"
import UserPage from "./UserPage";

interface OutletProps {
    page: string;
    routeTo(): void;
}

export default function Outlet(props: OutletProps) {
    if (props.page == 'home') {
        return (
            <ScrollPage/>
        )
    }
    else if (props.page == 'user') {
        return (
            <UserPage routeTo={props.routeTo}/>
        )
    }
    
}