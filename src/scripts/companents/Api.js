export default class Api{
    constructor(parameters) {
        this._url = parameters.baseUrl
        this._headers = parameters.headers
        this._authorization = parameters.headers.authorization
    }

    _checkResponse (res) {
        return res.ok ? res.json() : Promise.reject 
    } 

    getUserInfo(){
        return fetch(`${this._url}/users/me`, {
            headers:{
                authorization: this._authorization
            }
        }).then(this._checkResponse)
    }


    getDefaultCards(){
        return fetch(`${this._url}/cards`, {
            headers:{
                authorization: this._authorization
            }
        }).then(this._checkResponse)
    }

}