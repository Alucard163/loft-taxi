// eslint-disable-next-line no-unused-vars
import React, { useEffect, useCallback, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { TextField, Autocomplete, Card, CardContent } from '@mui/material'

import CardWrap from '../common/CardWrap'
import { askForAddress, askForRoute } from '../../actions'

import styles from './Order.module.css'

import bmw from './img/bmw.png'
import mercedes from './img/mercedes.png'
import tesla from './img/tesla.png'

function Order (props) {
  const { isCardUpdated, addresses } = props
  const dispatch = useDispatch()
  const [from, setFrom] = useState(null)
  const [to, setTo] = useState(null)

  const handleFromChange = useCallback((event, newValue) => {
    setFrom(newValue)
  }, [])

  const handleToChange = useCallback((event, newValue) => {
    setTo(newValue)
  }, [])

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault()

      const { from, to } = event.currentTarget

      dispatch(askForRoute(from, to))
    },
    [dispatch]
  )

  useEffect(() => {
    dispatch(askForAddress())
  }, [dispatch])

  return isCardUpdated
    ? (
    <form className={styles.content} onSubmit={handleSubmit}>
      <div>
        <div className={styles.input}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={addresses.filter(a => a !== to)}
            sx={{ width: 300 }}
            value={from}
            renderInput={(params) => <TextField {...params} label="Откуда" name="from" />}
            onChange={handleFromChange}
          />
        </div>
        <div className={styles.input}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={addresses.filter(a => a !== from)}
            sx={{ width: 300 }}
            value={to}
            renderInput={(params) => <TextField {...params} label="Куда" name="to" />}
            onChange={handleToChange}
          />
        </div>
      </div>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <CardWrap name="Стандарт" price="150" img={bmw} />
          </li>
          <li className={styles.item}>
            <CardWrap name="Комфорт" price="250" img={tesla} />
          </li>
          <li className={styles.item}>
            <CardWrap name="Премиум" price="300" img={mercedes} />
          </li>
        </ul>
        <input type="submit" value="Заказать" className={styles.btn} />
      </div>
    </form>
      )
    : (
    <Card className={styles.content}>
      <CardContent sx={{ padding: 3 }}>
        <h1 className={styles.error}>Ошибка карты</h1>
        <h5 className={styles.error_info}>Введите платёжные данные</h5>
        <Link to="/profile">Перейти в профиль</Link>
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
