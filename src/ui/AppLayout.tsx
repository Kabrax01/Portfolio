import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function AppLayout() {
    return (
        <div className="layout">
            <Navbar />

            <main>
                <Outlet />
                {/* <div className="placeholder"></div> */}
            </main>
        </div>
    );
}

export default AppLayout;
