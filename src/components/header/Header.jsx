import React from "react";
import { links } from "../../utils/constants/header";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../../actions";

import styles from './Header.module.css';
import logo from '../../assets/svg/logo.svg';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    isActive = this.props.isLoggedIn;
    activeClass = () => {
        return this.isActive ? `${styles.isActive}` : '';
    }
    handleClick = (key) => {
        if (key === 'login') {
            this.props.logOut()
        }
    }

    render() {
        return (
            <header data-testid="header-component" className={styles['header']}>
                <img src={logo} alt="логотип такси" className={styles['logo']} />
                <nav>
                    <ul className={styles['Nav']}>
                        {links.map(item => (
                            <li key={item.id} className={`${styles.link} ${this.activeClass(item.key)}`}>
                                <Link to={item.href} onClick={() => this.handleClick(item.key)}>
                                    {item.text}
                                </Link>
                            </li>)
                        )}
                    </ul>
                </nav>
            </header>
        )
    }
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