export default class UserInfo {
    constructor(profileTitleSelector, profileJobSelector, profileAvatarSelector) {
        this._profileTitle = document.querySelector(profileTitleSelector)
        this._profileJob = document.querySelector(profileJobSelector)
        this._profileAvatar = document.querySelector(profileAvatarSelector)

    }

    getUserInfo = () => {
        return {
            userName: this._profileTitle.textContent,
            userjob: this._profileJob.textContent
        }

    }
    
    getId () {
        return this._id;
      }


    setId (element) {
        this._id = element;
      }
    
      

    setUserInfo({ avatar, userName, userjob }) {
        this._profileAvatar.src = avatar
        this._profileTitle.textContent = userName
        this._profileJob.textContent = userjob
    }


}