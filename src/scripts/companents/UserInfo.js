export default class UserInfo {
    constructor(profileTitle, profileJob) {
        this._profileTitle = document.querySelector(profileTitle)
        this._profileJob = document.querySelector(profileJob)
    }

    getUserInfo = () => {
        
        return {
            userName: this._profileTitle.textContent,
            userjob: this._profileJob.textContent 
        }

    }

    setUserInfo(userData){
        this._profileTitle.textContent = userData.userName
        this._profileJob.textContent  = userData.userjob
    }
}