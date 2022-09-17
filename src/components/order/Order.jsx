// eslint-disable-next-line no-unused-vars
import React, { useEffect, useCallback } from 'react'
import { connect, useDispatch } from 'react-redux'
import { TextField, Autocomplete, Link, Card, CardContent } from '@mui/material'

import CardWrap from '../common/CardWrap'
import { askForAddress, askForRoute } from '../../actions'

import styles from './Order.module.css'

import bmw from './img/bmw.png'
import mercedes from './img/mercedes.png'
import tesla from './img/tesla.png'

function Order (props) {
  const { isCardUpdated, addresses } = props
  const dispatch = useDispatch()

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    const { from, to } = event.target
    dispatch(askForRoute(from.value, to.value))
  }, [dispatch])

  const handleRenderInput = useCallback((params, label, name) => {
    return <TextField {...params} label={label} name={name} />
  }, [])

  useEffect(() => {
    dispatch(askForAddress())
  }, [dispatch])

  return (
    isCardUpdated
      ? <form className={styles.content} onSubmit={handleSubmit}>
            <div>
                <div className={styles.input}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={addresses}
                        sx={{ width: 300 }}
                        renderInput={(params) => handleRenderInput(params, 'Откуда', 'from')}
                    />
                </div>
                <div className={styles.input}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={addresses}
                        sx={{ width: 300 }}
                        renderInput={(params) => handleRenderInput(params, 'Куда', 'to')}
                    />
                </div>
            </div>
            <div className={styles.wrapper}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <CardWrap name='Стандарт' price='150' img={bmw} />
                    </li>
                    <li className={styles.item}>
                        <CardWrap name='Комфорт' price='250' img={tesla} />
                    </li>
                    <li className={styles.item}>
                        <CardWrap name='Премиум' price='300' img={mercedes} />
                    </li>
                </ul>
                <input type="submit" value="Заказать" className={styles.btn} />
            </div>
        </form>
      : <Card className={styles.content}>
            <CardContent>
                <h1 className={styles.error}>Ошибка карты</h1>
                <h5 className={styles.error_info}>Введите платёжные данные</h5>
                <Link to='/profile'>Перейти в профиль</Link>
            </CardContent>
        </Card>
  )
}

export default connect(
  (state) => ({
    isCardUpdated: state.card.isCardUpdated,
    addresses: state.address.addresses
  }),
  { askForAddress, askForRoute }
)(Order)
