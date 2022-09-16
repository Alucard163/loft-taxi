export const serverRegister = async (email, password, name, surname) => {
  const user = {
    email,
    password,
    name,
    surname
  }

  return fetch(
    'https://loft-taxi.glitch.me/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }
  )
    .then(res => res.json())
    .then(data => {
      localStorage.setItem('token', data.token)
      return data
    })
    .catch((e) => {
      console.error('Error: ' + e)
    })
}

export const serverLogin = async (email, password) => {
  const user = {
    email,
    password
  }

  return fetch(
    'https://loft-taxi.glitch.me/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }
  )
    .then(res => res.json())
    .then(data => {
      localStorage.setItem('token', data.token)
      return data
    })
    .catch((e) => {
      console.error('Error: ' + e)
    })
}

export const serverUpdateCard = async (cardName, cardNumber, cardDate, cardCvc) => {
  const user = {
    cardNumber,
    expiryDate: cardDate,
    cardName,
    cvc: cardCvc,
    token: localStorage.getItem('token')
  }

  return fetch(
    'https://loft-taxi.glitch.me/card', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }
  )
    .then(res => res.json())
    .then(data => {
      return data
    })
    .catch(e => console.error(e))
}

export const serverGetCard = async () => {
  const token = localStorage.getItem('token')
  return fetch(`https://loft-taxi.glitch.me/card?token=${token}`)
    .then(res => res.json())
    .then(data => {
      return data
    })
    .catch((e) => {
      console.error('Error: ' + e)
    })
}

export const serverAddressList = async () => {
  return fetch('https://loft-taxi.glitch.me/addressList')
    .then(res => res.json())
    .then(data => {
      return data.addresses
    })
    .catch((e) => {
      console.error('Error: ' + e)
    })
}

export const serverGetRoute = async (from, to) => {
  return fetch(`https://loft-taxi.glitch.me/route?address1=${from}&address2=${to}`)
    .then(res => res.json())
    .then(data => {
      return data
    })
    .catch((e) => {
      console.error('Error: ' + e)
    })
}
