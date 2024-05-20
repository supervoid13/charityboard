import instance from '../axios.js';

export default class AuthService{
    static async login(email, password) {
        return instance.post('auth/login', {email, password})
        .then(response => response.data.token);
    }
    static async register(email, password, username, city, firstname, lastname) {
        return instance.post('auth/register', {email, password, username, city, firstname, lastname})
        .then(response => response.data.token);
    }
}


