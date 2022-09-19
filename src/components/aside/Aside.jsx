import styles from './Aside.module.css'
import logo from '../../assets/svg/logo-aside.svg'

const Aside = () => (
    <div data-testid="aside-component" className={styles.aside}>
        <img src={logo} alt="логотип такси" />
    </div>
)

export default Aside
