// eslint-disable-next-line no-unused-vars
import React from 'react'
import Card from '@mui/material/Card'
import { CardContent, Typography, Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateCard } from '../../actions'

import ProfileForm from '../../components/forms/ProfileForm'
import styles from './ProfilePage.module.css'

function ProfilePage (props) {
  const { isCardUpdated } = props

  return (
        <div data-testid="profile-page" className={styles.profile}>
            {!isCardUpdated
              ? <ProfileForm />
              : <Card sx={{ minWidth: 275, minHeight: 'auto' }}>
                    <CardContent>
                        <Typography fontSize='36px' align='center' className={styles.header}>Профиль</Typography>
                        <Typography fontSize='18px' align='center' gutterBottom >Ваши данные успешно обновлены!</Typography>
                        <Stack
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Link to='/map' className={styles.button}>Перейти на карту</Link>
                        </Stack>
                    </CardContent>
                </Card>
            }
        </div>
  )
}

ProfilePage.propsType = {
  isCardUpdated: PropTypes.bool
}

export default connect(
  (state) => ({ isCardUpdated: state.card.isCardUpdated }),
  { updateCard })(ProfilePage)
