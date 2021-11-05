import axios from "axios";
import { Maybe } from "@fpc/maybe";
import localStorage from "local-storage";

const BASE_URL = 'http://localhost:5500'


export const loginController = async (data) => {
    await axios({
        method: 'post',
        url: BASE_URL,
        data: {
            email: data.email,
            pass: data.pass
        }
    })
        .then((data) => {
            const getData = Maybe(data.data);
            if (Maybe(getData).nonEmpty) {
                if (data.data !== 'Login Failed') {
                    new Promise((resolve, reject) => {
                        const setToken = localStorage.set('token', data.data.tokenAccess);
                        console.log(data)
                        if (setToken) {
                            resolve(data)
                        }
                        else {
                            reject('TokenNotSet')
                        }
                    }).then((msg) => {
                        console.log(`Token Upload ${msg}`)
                        window.location.href = '/'
                    }).catch((err) => { console.log(`Error ${err}`) })
                    console.log(data)
                    alert(data)
                }
                else {
                    alert('Login Failed')
                }
            }
            else {
                alert('Login Failed')
            }
        }).catch((err) => console.log(`Error: ${err}`));
}

export const createAccountController = async (data) => {
    await axios({
        method: 'post',
        url: BASE_URL + '/register',
        data: {
            email: data.email,
            pass: data.pass
        }
    })
        .then((data) => {
            const getData = data;

            if (Maybe(getData).isEmpty) {
                data.json({ status: 'invalid create account' })
            }

            if (Maybe(getData).nonEmpty) {
                new Promise((resolve, reject) => {
                    const setToken = localStorage.set('token', data.data.tokenAccess)
                    if (setToken) {
                        resolve(`setToken: ${setToken}`)
                    }
                    else {
                        reject(`rejectedToken: ${setToken}`)
                    }
                }).then((msg) => {
                    console.log({ msg: msg })
                    window.location.href = '/register/account'
                }).catch((err) => {
                    console.log({ err: err })
                })
            }
        }).catch((err) => console.log(`Error: ${err}`))
}

export const createAccountInfoController = async (data) => {
    await axios({
        method: 'post',
        url: BASE_URL + '/accountInfo',
        headers: {
            'x-access-token': `${localStorage.get('token')}`,
            'content-type': 'application/json'
        },
        data: {
            firstName: data.firstName,
            lastName: data.lastName
        }
    }).then(() => { console.log('hello data pass') }).catch((err) => { console.log(`error: ${err}`) })
}


export const getDataController = async () => {
    await axios({
        method: 'get',
        url: BASE_URL,
        headers: {
            Authorization: `Bearer ${localStorage.get('token')}`
        }
    }).then((response) => {
        console.log(response.data)
    }).catch((err) => {
        console.log(err)
    })
}

