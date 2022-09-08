import React, { useEffect, useState } from "react";
import { links } from "../../utils/constants/header";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../../actions";

import styles from './Header.module.css';
import logo from '../../assets/svg/logo.svg';

function Header(props) {
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState(location.pathname)

    useEffect(() => {
        setCurrentPage(location.pathname)
    }, [location.pathname]);

    const activeClass = (key) => {
        const isActive = currentPage === `/${key}`;
        return isActive ? `${styles.isActive}` : '';
    }
    const handleClick = (key) => {
        if (key === 'login') {
            props.logOut()
        }
    }

    return (
        <header data-testid="header-component" className={styles['header']}>
            <img src={logo} alt="логотип такси" className={styles['logo']} />
            <nav>
                <ul className={styles['Nav']}>
                    {links.map(item => (
                        <li key={item.id} className={`${styles.link} ${activeClass(item.key)}`}>
                            <Link to={item.href} onClick={() => handleClick(item.key)}>
                                {item.text}
                            </Link>
                        </li>)
                    )}
                </ul>
            </nav>
        </header>
    )
}

Header.propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
}

export default connect(
    (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
    { logOut }
)
(Header);