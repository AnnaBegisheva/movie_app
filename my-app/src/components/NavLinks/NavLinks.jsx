import { Link } from "react-router-dom";

const NavLinks = (props) => {

    return (
        <nav>
            <ul className={props.container} >
                <li className={props.menuItem}>
                    <Link to="/" className={props.menuLink} >
                        Home
                    </Link>
                </li>
                <li className={props.menuItem}>
                    <Link to="/catalog/liked" className={props.menuLink}>
                        My collection
                    </Link>
                </li>
                <li className={props.menuItem}>
                    <Link to="/catalog/films" className={props.menuLink}>
                        Movies
                    </Link>
                </li>
                <li className={props.menuItem}>
                    <Link to="/catalog/series" className={props.menuLink}>
                        Series
                    </Link>
                </li>
                <li className={props.menuItem}>
                    <Link to="/catalog/cartoons" className={props.menuLink}>
                        Cartoons
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavLinks;