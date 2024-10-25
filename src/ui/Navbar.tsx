import { Link } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    function closeNavigation() {
        setIsOpen(false);
    }

    return (
        <div className="navbar">
            <div className="navbar__container">
                <Link to="/" className="logo_link">
                    <img src="./logo.svg" alt="logo image" />
                </Link>

                <Hamburger
                    toggled={isOpen}
                    toggle={setIsOpen}
                    label="Show menu button"
                />

                <nav className={`navigation ${isOpen ? "open" : ""}`}>
                    <Link to="/" onClick={closeNavigation}>
                        Main
                    </Link>
                    <Link to="/projects" onClick={closeNavigation}>
                        Projects
                    </Link>
                    <Link to="/contact" onClick={closeNavigation}>
                        Contact
                    </Link>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
