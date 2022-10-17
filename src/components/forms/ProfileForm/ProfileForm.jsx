// eslint-disable-next-line no-unused-vars
import React, { useCallback } from 'react'
import { FormControl, InputLabel, Input, CardContent, Typography, Box, Stack } from '@mui/material'
import { IMaskInput } from 'react-imask'
import Card from '@mui/material/Card'
import { connect, useDispatch } from 'react-redux'
import { updateCard } from '../../../actions'
import styles from '../../../pages/profile/ProfilePage.module.css'
import CardImg from '../../../pages/profile/img/Group 45.png'

const CardMaskCustom = React.forwardRef(function TextMaskCustom (props, ref) {
  const { onChange, ...other } = props

  return (
    <IMaskInput
      {...other}
      mask="0000 0000 0000 0000"
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  )
})

const DateMaskCustom = React.forwardRef(function NameMaskCustom (props, ref) {
  const { onChange, ...other } = props
  return (
    <IMaskInput
      {...other}
      mask="00/00"
      unmask={false}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  )
})

const CvcMaskCustom = React.forwardRef(function NameMaskCustom (props, ref) {
  const { onChange, ...other } = props
  return (
    <IMaskInput
      {...other}
      mask="000"
      unmask={true}
      inputRef={ref}
      overwrite
    />
  )
})

function ProfileForm (props) {
  const dispatch = useDispatch()

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    const { cardName, cardNumber, cardDate, cardCvc } = event.currentTarget
    dispatch(updateCard(
      cardName.value, cardNumber.value, cardDate.value, cardCvc.value
    ))
  }, [dispatch])

  const [values, setValues] = React.useState({
    cardName: '',
    cardNumber: '',
    cardDate: '',
    cardCvc: ''
  })

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card className={styles.card} sx={{ minWidth: 275, paddingX: 5, paddingY: 7 }}>
        <CardContent>
          <Typography
            fontSize='36px'
            align='center'
            className={styles.header}
          >
            Профиль
          </Typography>
          <Typography
            fontSize='18px'
            align='center'
            gutterBottom
          >
            Введите платежные данные
          </Typography>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={8}
          >
            <Box sx={{ width: 355 }}>
              <FormControl variant="standard" fullWidth>
                <InputLabel
                  htmlFor="formatted-name-mask-input"
                  shrink
                >
                  Имя владельца
                </InputLabel>
                <Input
                  value={values.cardName}
                  onChange={handleChange}
                  name="cardName"
                  id="formatted-name-mask-input"
                  type="text"
                />
              </FormControl>
              <FormControl variant="standard" fullWidth>
                <InputLabel
                  htmlFor="formatted-number-mask-input"
                  shrink
                >
                  Номер карты
                </InputLabel>
                <Input
                  value={values.cardNumber}
                  onChange={handleChange}
                  name="cardNumber"
                  id="formatted-number-mask-input"
                  inputComponent={CardMaskCustom}
                />
              </FormControl>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4}
              >
                <FormControl variant="standard">
                  <InputLabel
                    htmlFor="formatted-date-mask-input"
                    shrink
                  >
                    MM/YY
                  </InputLabel>
                  <Input
                    value={values.cardDate}
                    onChange={handleChange}
                    name="cardDate"
                    id="formatted-date-mask-input"
                    inputComponent={DateMaskCustom}
                  />
                </FormControl>
                <FormControl variant="standard">
                  <InputLabel
                    htmlFor="formatted-cvc-mask-input"
                    shrink
                  >
                    CVC
                  </InputLabel>
                  <Input
                    value={values.cardCvc}
                    onChange={handleChange}
                    name="cardCvc"
                    id="formatted-cvc-mask-input"
                    inputComponent={CvcMaskCustom}
                  />
                </FormControl>
              </Stack>
            </Box>
            <Box>
              <img src={CardImg} alt="Card" />
            </Box>
          </Stack>
          <Stack
            justifyContent="center"
            alignItems="center"
          >
            <input type="submit" value="Сохранить" className={styles.button} />
          </Stack>
        </CardContent>
      </Card>
    </form>
  )
}

export default connect(
  (state) => ({ isCardUpdated: state.card.isCardUpdated }),
  { updateCard })(ProfileForm)
