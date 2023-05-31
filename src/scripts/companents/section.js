export default class Section{
    constructor({items, renderer}, sectionConteiner){
        this._sectionConteiner = document.querySelector(sectionConteiner)
        this._ArrayItems = items;
        this._renderer = renderer 
    }

    addCardArray(){
        this._ArrayItems.forEach((element) => {
            this._renderer(element)
        })
    }
    
    addItem(domElement){
        this._sectionConteiner.prepend(domElement) 
    }

}