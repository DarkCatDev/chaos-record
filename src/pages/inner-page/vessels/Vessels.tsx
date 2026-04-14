import { Outlet } from "react-router-dom"
import ExBar from "./Nav-Bar/Exbar"

function Vessels() {
    return (
        <div>
            <ExBar />
            <Outlet />
        </div>
    )
}


export default Vessels