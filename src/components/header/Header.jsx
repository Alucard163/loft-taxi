import React from "react";
import { links } from "../../utils/constants/header";
import PropTypes from "prop-types";
import { AuthContext } from '../../context/AuthContext';

import styles from './Header.module.css';
import logo from '../../assets/svg/logo.svg';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    static contextType = AuthContext;

    isActive = (key) => key === this.props.page;
    activeClass = (key) => {
        return this.isActive(key) ? `${styles.isActive}` : '';
    }
    handleClick = (key) => {
        if (key === 'login') {
            this.context.logOut()
        }
        this.props.setPage(key)
    }

    componentDidUpdate() {
        if (!this.context.isLoggedIn)
            this.props.setPage('login')
    }

    render() {
        return (
            <header data-testid="header-component" className={styles['header']}>
                <img src={logo} alt="логотип такси" className={styles['logo']} />
                <nav>
                    <ul className={styles['Nav']}>
                        {links.map(item => (
                            <li key={item.id} className={`${styles.link} ${this.activeClass(item.key)}`}>
                                <div onClick={() => this.handleClick(item.key)}>
                                    {item.text}
                                </div>
                            </li>)
                        )}
                    </ul>
                </nav>
            </header>
        )
    }
}

Header.propTypes = {
    page: PropTypes.string,
    setPage: PropTypes.func,
}

export default Header;