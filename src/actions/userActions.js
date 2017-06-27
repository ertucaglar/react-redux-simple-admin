import {globalAppSettings} from "../configurations/globalAppSettings";
import {ajaxCallError, beginAjaxCall} from "./ajaxStatusActions";
import axios from 'axios';

export function isLoggedIn() {
    let retVal = false;

    let user = window.localStorage.getItem(globalAppSettings.auth.localStorageKey);
    if (user) {
        retVal = true;
    }

    return retVal;
}

export function getToken() {
    let user = JSON.parse(window.localStorage.getItem(globalAppSettings.auth.localStorageKey));
    if (user !== null && user !== undefined){
        return user.token;
    } else {
        return "";
    }
}

export function logout() {
    window.localStorage.removeItem(globalAppSettings.auth.localStorageKey);
}

export function login(user) {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return new Promise((resolve, reject) => {
            axios.post(globalAppSettings.endpoints.user.login(), {
                email: user.email,
                password: user.password
            })
                .then(function (response) {
                    if (response.data !== null && response.data.token !== undefined){
                        window.localStorage.setItem(globalAppSettings.auth.localStorageKey, JSON.stringify(response.data));
                        resolve(true);
                    }
                })
                .catch(function (error) {
                    dispatch(ajaxCallError(error));
                    reject('Kullanıcı girişi sağlanamadı');
                    throw (error);
                });
        })
    };
}