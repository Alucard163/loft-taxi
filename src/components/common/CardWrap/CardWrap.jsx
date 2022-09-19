// eslint-disable-next-line no-unused-vars
import React from 'react'

import styles from './CardWrap.module.css'

const CardWrap = (props) => (
    <div>
        <label>
            <input type="radio" name='car' className={styles.checkbox} />
            <div className={styles.inner}>
                <h5 className={styles.name}>{props.name}</h5>
                <div className={styles.info}>Стоимость</div>
                <div className={styles.price}>{props.price}₽</div>
                <img className={styles.img} src={props.img} alt="Car" />
            </div>
        </label>
    </div>
)

export default CardWrap
