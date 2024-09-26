import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <Link to="/">Main</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
}

export default Navbar;
