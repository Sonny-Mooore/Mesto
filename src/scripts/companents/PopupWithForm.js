import Popup from "./popup.js";

export default class PopupWithForm extends Popup{
    constructor(popupSelector, submitFunction ) {
        super(popupSelector)
        this._submitFunction = submitFunction
        this._form = this._popupClass.querySelector('.popup__form')
        this._inputs = this._form.querySelectorAll('.popup__input')
     }
     
    _getInputsValue(){  
        this._values = {};
        this._inputs.forEach((input => {
            
        
            this._values[input.name] = input.value 
            
        }))
        // console.log(this._values);
        return this._values
    }

    setInputValue(userData){ 
        this._inputs.forEach((input)=>{
            // console.log(input.textContent);
            input.value = userData[input.name] 
        }) 
    }

    setEventListeners(){
        super.setEventListeners()
        this._form.addEventListener('submit', (event)=>{
            event.preventDefault()
            this._submitFunction(this._getInputsValue())

        })
    }

     close(){
        super.close()
        this._form.reset()
     }
}