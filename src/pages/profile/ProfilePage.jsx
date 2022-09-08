import React from "react";
import Card from '@mui/material/Card';
import { CardContent, TextField, Typography, Box, Stack } from "@mui/material";
import CardImg from './img/Group 45.png'

import styles from './ProfilePage.module.css';

function ProfilePage() {
    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
        <div data-testid="profile-page" className={styles.profile}>
            <form onSubmit={handleSubmit}>
                <Card sx={{ minWidth: 275, minHeight: 275 }}>
                    <CardContent>
                        <Typography fontSize='36px' align='center' >Профиль</Typography>
                        <Typography fontSize='18px' align='center' gutterBottom >Введите платежные данные</Typography>
                        <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={8}
                        >
                            <Box sx={{ width: 355 }}>
                                <TextField id="standard-basic" label="Имя владельца" variant="standard" name="cardName" fullWidth />
                                <TextField id="standard-basic" label="Номер карты" variant="standard" name="cardNumber" fullWidth />
                                <Stack
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={4}
                                >
                                    <TextField id="standard-basic" label="MM/YY" name="cardDate" variant="standard" />
                                    <TextField id="standard-basic" label="CVC" name="cardCvc" variant="standard" />
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
                            <input type="submit" value="Сохранить" className="Login__submit" />
                        </Stack>
                    </CardContent>
                </Card>
            </form>
        </div>
    )
}

export default ProfilePage;