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
                <Link to="/Portfolio/" className="logo_link">
                    <img
                        src={`${import.meta.env.BASE_URL}./logo.svg`}
                        alt="logo image"
                    />
                </Link>

                <Hamburger
                    toggled={isOpen}
                    toggle={setIsOpen}
                    label="Show menu button"
                />

                <nav className={`navigation ${isOpen ? "open" : ""}`}>
                    <Link to="/Portfolio/" onClick={closeNavigation}>
                        Main
                    </Link>
                    <Link to="/Portfolio/projects" onClick={closeNavigation}>
                        Projects
                    </Link>
                    <Link to="/Portfolio/contact" onClick={closeNavigation}>
                        Contact
                    </Link>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
