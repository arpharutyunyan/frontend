import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

function NavMenu(props) {
    const {menuItem} = props;

    return (
        <div className="navMenu">
            {
                menuItem.length ?
                    <ul>
                        {
                            menuItem.map((elem, index) => (
                                <li key={index}>
                                    <NavLink to={`/showMenu/${elem}`}>{elem.toUpperCase()}</NavLink>
                                </li>
                            ))
                        }
                    </ul> : null

            }
        </div>
    );
}

export default NavMenu;

NavMenu.propTypes = {
    menuItem: PropTypes.array.isRequired,
};

NavMenu.defaultProps = {
    menuItem: [],
};