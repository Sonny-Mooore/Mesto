export default class Section{
    constructor({items, renderer}, sectionContainer){
        this._sectionConteiner = document.querySelector(sectionContainer)
        this._arrayItems = items;
        this._renderer = renderer 
    }

    addCardArray(){
        this._arrayItems.forEach((element) => {
            this._renderer(element)
        })
    }
    
    addItem(domElement){
        this._sectionConteiner.prepend(domElement) 
    }

}