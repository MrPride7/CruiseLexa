class Component {
    constructor(type){
        this.type = type;
    }
    getHtmlElement(selector){
        return document.querySelector(`${selector}`).content.cloneNode(true)
    }
    render(){
        let template = this.getHtmlElement()



        // const directives = {
        // "text": (element)=>{
        //     element.textContent = this.state[element.dataset.text];
        // },
        // "attribute": (element)=>{
        //     let attrs = JSON.parse(element.dataset.attribute);
        //     Object.keys(attrs).forEach(attribute=>{
        //         element.setAttribute(attribute, this.state[attrs[attribute]])
        //     })
        // },
        // "class": (element)=>{
        //     let attrs = JSON.parse(element.dataset.class)
        //     Object.keys(attrs).forEach(attribute=> {
        //         if(attrs[attribute] === 'add'){
        //             element.classList.add(attribute)
        //         }
        //     })
        // },
        // 'if': (element)=>{
        //     let attr = element.dataset.if
        //     if(!this.state[attr]){
        //         element.remove();
        //     }
        // },
        // 'listener': (element)=>{
        //     let listeners = JSON.parse(element.dataset.listener)
        //     Object.keys(listeners).forEach(listener=>{
        //         element.addEventListener(listener,(event)=>{
        //             if(this.handlers[listeners[listener]]){
        //                 this.handlers[listeners[listener]](event)
        //             }
        //         })
        //     })
        // },
        // 'for': (element) =>{
        //     let iterator = JSON.parse(element.dataset.for);
        //     for (let item of this.state) {
        //         let componentClass = componentRegistry.get(iterator.component);
        //         let component = new componentClass(item);
        //         element.append(component.render());
        //     }
        // },
        // 'put': (element) =>{
        //     let nameOfComponent = element.dataset.put
        //     let componentClass = componentRegistry.get(nameOfComponent);
        //     let component = new componentClass();
        //     element.append(component.render());
        // }
        // };
        //
        // for (let key in directives){
        //     console.log('s')
        //     let elements = template.querySelectorAll(`[data-${key}]`)
        //     elements.forEach( element => directives[key](element))
        // }

        const directiveTypes  = ['text', 'attribute', 'class', 'if', 'listener','for','put'];
        for(let type of directiveTypes){
            let elements = template.querySelectorAll(`[data-${type}]`);
            const nameDirective = `${type[0].toUpperCase()+type.slice(1)}Directive`;
            const directiveClass = directiveRegistry.get(nameDirective);
            elements.forEach(element =>{
               const directive = new  directiveClass(element, element.dataset[type], this);
               backend.addCallback(directive.render())
            })
        }




        return template;
    }

}