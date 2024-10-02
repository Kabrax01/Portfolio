import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__container">
                <Link to="/" className="logo_link">
                    <img src="./logo.svg" alt="logo image" />
                </Link>

                <nav>
                    <Link to="/">Main</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
