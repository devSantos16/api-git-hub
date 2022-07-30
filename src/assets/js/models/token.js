export class token {
    constructor(user) {
        this._token = 'https://api.github.com/users';
        this._user = user;
    }

    get token() {
        return this._token;
    }

    set token(token) {
        this._token = token;
    }

    get user() {
        return this._user;
    }

    set user(user) {
        this._user = user;
    }

    URL() {
        return `${this.token}/${this.user}`
    }
}