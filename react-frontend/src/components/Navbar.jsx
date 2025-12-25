import { Link } from "react-router-dom";
import "../App.css";

export default function Navbar() {
    return (
        <nav className="nav">
            <div className="nav-inner">
                <div className="brand">
                    <Link to="/" className="brand-link">
                        ArticleStack
                    </Link>
                </div>

                <div className="nav-links">
                    <Link to="/">Articles</Link>
                    <Link to="/">Categories</Link>
                    <Link to="/">About</Link>
                </div>
            </div>
        </nav>
    );
}
