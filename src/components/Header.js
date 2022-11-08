import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="p-3 text-bg-dark">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <Link to={"/"} className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <h1 style={{fontFamily: "Kavoon"}} className="pe-3">Duckies</h1>
                    </Link>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><Link to={"/liste"} className="nav-link px-2 text-white">Liste des canards</Link></li>
                        <li><Link to={"/a-propos"} className="nav-link px-2 text-white">À propos</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

Header.defaultProps = {
    title: "Titre par défaut"
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header