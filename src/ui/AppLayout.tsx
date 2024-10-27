import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

function AppLayout() {
    const location = useLocation();

    return (
        <div className="layout">
            <Navbar />

            <main>
                <Outlet />
                <div
                    className="placeholder"
                    style={{
                        display:
                            location.pathname == "/Portfolio/projects"
                                ? "block"
                                : "none",
                    }}></div>
            </main>
        </div>
    );
}

export default AppLayout;
