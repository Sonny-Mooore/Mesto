export default class Api{
    constructor(parameters) {
        this._url = parameters.baseUrl
        this._headers = parameters.headers
        this._authorization = parameters.headers.authorization
        console.log(this._url);
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
                authorization: this._headers.authorization
            }
        }).then(this._checkResponse)
    }
    
    setUserInfo(data){
        console.log(data);
        return fetch(`${this._url}/users/me`, {
            method:'PATCH',
            headers: this._headers, 
            body: JSON.stringify({
                name: data.userName, 
                about: data.userjob
            })
        }).then(this._checkResponse)
    }

}