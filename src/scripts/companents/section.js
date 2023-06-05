export default class Section{
    constructor({items, renderer}, sectionContainer){
        this._sectionConteiner = document.querySelector(sectionContainer)
        this._arrayItems = items;
        this._renderer = renderer 
    }

    addCardArray(dataCard){
        dataCard.forEach((element) => {
            this._renderer(element)
        })
    }
    
    addItemPrepend(domElement){
        this._sectionConteiner.prepend(domElement) 
    }
    addItemAppend(domElement){
        this._sectionConteiner.append(domElement) 
    }





}