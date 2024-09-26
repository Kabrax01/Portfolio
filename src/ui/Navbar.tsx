import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__container">
                <img src="./logo.svg" alt="" />
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
