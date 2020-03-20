(function (){
    mainFUNCTION();

    async function fetchJSON(){
        const requiest = await fetch('./fakeData.json')
        return requiest.json()
    }
    async function mainFUNCTION(){
        const data = await fetchJSON();

        const app = new AppCustom('.catalog__list', '.template_element');
        app.addWrapToComponents();
        app.addBackend(data.cards);
        app.fullingComponents();
        console.log(app.components);
        app.components.forEach(item=>{
            item.getElementsTemplateByAttributeName('data-name')
            item.changeElementsForDataBind()
            console.log(item.template)
        })
    }

})()
//BACKEND----------------------------------------------------
class MyBackend{
    constructor(state){
        this.state = state
    }
    getData(){
        return this.state;
    }
    getElementById(id){
        return this.getData().filter(element => element.id === id)
    }
    removeElementById(id){
        this.getData().splice(id,1)
    }
    addElement(element){
        if(Array.isArray(element) && element.length){
            this.state.push(element)
        }
    }
}
//BACKEND----------------------------------------------------

//COMPONENT-------------------------------------------------
class MyComponent{
    constructor(template, itemData){
        this.template = template.content;
        this.elements = null;
        this.itemData = itemData;
    }
    getElementsTemplateByAttributeName(attribute){
        this.elements = this.template.querySelectorAll(`[${attribute}]`)

    }
    changeElementsForDataBind(){
        //передать дата элемент и присвоить его значение элементу
        // метод использовать в переборе и кидать в него по элементу
        this.elements.forEach(element =>{
            const attributeChange = element.getAttribute('data-bind');
            const attributeWhatChange =  element.getAttribute('data-name');
            if(this.itemData){
                element[`${attributeChange}`] = this.itemData[`${attributeWhatChange}`];
            }
        })
    }

}
//COMPONENT-------------------------------------------------
class AppCustom{
    constructor(addressWrapForTemplate, addressTemplate ) {
        this.components = [];
        this.wrapComponents = null;
        this.backend = null;
        this.addressWrapForTemplate = addressWrapForTemplate
        this.addressTemplate = addressTemplate;
    }
    addBackend(data){
        this.backend = new MyBackend(data)
    }
    addWrapToComponents(){
        this.wrapComponents = document.querySelector(`${this.addressWrapForTemplate}`);
    }
    addComponent(itemData){
        const template  = document.querySelector(`${this.addressTemplate}`);
        this.components.push(new MyComponent(template, itemData))
    }
    renderComponents(){
        this.components.forEach(component=> {
            this.wrapComponents.append(component)
        })
    }
    fullingComponents(){
        this.backend.state.forEach(item =>{
            this.addComponent(item)
        })
    }

}
