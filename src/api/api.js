export const serverRegister = async (email, password, name, surname) => {
    let user = {
        email: email,
        password: password,
        name: name,
        surname: surname
    }
    console.log(JSON.stringify(user));

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
        localStorage.setItem('token', data.token);
        console.log(data);
        return data;
    })
        .catch((e) => {
            console.log('Error: ' + e);
        });
}

export const serverLogin = async (email, password) => {
    let user = {
        email: email,
        password: password
    }
    console.log(JSON.stringify(user));

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
        localStorage.setItem('token', data.token);
        console.log(data);
        return data;
    })
        .catch((e) => {
            console.log('Error: ' + e);
        });
}