import React from "react";

import styles from './Header.module.css';
import logo from '../../assets/svg/logo.svg';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    links = [
        {href: "/map", key: "map", text: "Карта", id: 0},
        {href: "/profile", key: "profile", text: "Профиль", id: 1},
        {href: "/login", key: "login", text: "Выйти", id: 2 }
    ];

    isActive = (key) => key === this.props.page;

    render() {
        const { setPage } =  this.props;

        return (
            <header className={styles['header']}>
                <img src={logo} alt="логотип такси" className={styles['logo']} />
                <nav>
                    <ul className={styles['Nav']}>
                        {this.links.map(item => (
                            <li key={item.id} className={[styles.link, ...(this.isActive(item.key) ? styles.isActive : [])].join(' ')}>
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