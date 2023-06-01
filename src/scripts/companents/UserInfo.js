export default class UserInfo {
    constructor(profileTitleSelector, profileJobSelector) {
        this._profileTitle = document.querySelector(profileTitleSelector)
        this._profileJob = document.querySelector(profileJobSelector)
    }

    getUserInfo = () => {

        return {
            userName: this._profileTitle.textContent,
            userjob: this._profileJob.textContent
        }

    }

    setUserInfo(userData) {
        this._profileTitle.textContent = userData.userName
        this._profileJob.textContent = userData.userjob
    }
}