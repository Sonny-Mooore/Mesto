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
                authorization: this._headers.authorization
            }
        }).then(this._checkResponse)
    }
    
    setUserInfo(data){
        return fetch(`${this._url}/users/me`, {
            method:'PATCH',
            headers: this._headers, 
            body: JSON.stringify({
                name: data.userName, 
                about: data.userjob
            })
        }).then(this._checkResponse)
    }


    setAvatar(data){
        return fetch(`${this._url}/users/me/avatar`, {
            method:'PATCH',
            headers: this._headers, 
            body: JSON.stringify({
              avatar: data.avatar
            })
          
        }).then(this._checkResponse)
    }
    

    addCard(data){
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
              name: data.name,
              link: data.link,
            })
          }).then(this._checkResponse)
    }

    setLike(cardId){
        return fetch(`${this._url}/cards/${cardId}/likes `, {
            method: 'PUT',
            headers: {
                authorization: this._headers.authorization
            },
        }).then(this._checkResponse)
    }

    deleteLike(cardId){
        return fetch(`${this._url}/cards/${cardId}/likes `, {
            method: 'DELETE',
            headers: {
                authorization: this._headers.authorization
            },
        }).then(this._checkResponse)
    }


    deteteCard(cardId){
        return fetch(`${this._url}/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: this._headers.authorization
            },
        }).then(this._checkResponse)

    }
}