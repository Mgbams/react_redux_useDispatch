import {Link} from "react-router-dom";

const Header = () => (
    <header className="app-header">
        <nav>
            <Link className="nav-link" to="/">Acceuil</Link>
            <Link className="nav-link" to="/about">Apropos</Link>
            <Link className="nav-link" to="/contact">Contactez-nous</Link>
            <Link className="nav-link" to="/hooks">Exemple Hooks</Link>
            <Link className="nav-link" to="/axios">Exemple Axios</Link>
            <Link className="nav-link" to="/eshop">Exemple Axios - Eshop</Link>
        </nav>
    </header>
)

export default Header
