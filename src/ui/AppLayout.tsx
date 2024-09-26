import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function AppLayout() {
    return (
        <div className="layout">
            <Navbar />

            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default AppLayout;
