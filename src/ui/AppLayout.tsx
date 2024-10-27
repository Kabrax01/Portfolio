import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

function AppLayout() {
    const location = useLocation();

    console.log(location);

    return (
        <div className="layout">
            <Navbar />

            <main>
                <Outlet />
                <div
                    className="placeholder"
                    style={{
                        display:
                            location.pathname ===
                            `${import.meta.env.BASE_URL}/projects`
                                ? "block"
                                : "none",
                    }}></div>
            </main>
        </div>
    );
}

export default AppLayout;
