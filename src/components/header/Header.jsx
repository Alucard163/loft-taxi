import React from "react";
import { links } from "../../utils/constants/header";

import styles from './Header.module.css';
import logo from '../../assets/svg/logo.svg';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    isActive = (key) => key === this.props.page;
    activeClass = (key) => {
        return this.isActive(key) ? `${styles.isActive}` : '';
    }

    render() {
        const { setPage } =  this.props;

        return (
            <header className={styles['header']}>
                <img src={logo} alt="логотип такси" className={styles['logo']} />
                <nav>
                    <ul className={styles['Nav']}>
                        {links.map(item => (
                            <li key={item.id} className={`${styles.link} ${this.activeClass(item.key)}`}>
                                <div onClick={() => setPage(item.key)}>
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

export default Header;