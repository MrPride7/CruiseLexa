class FormComponent extends Component{
    constructor() {
        super();
        this.handlers = {
            "add":(event)=>{
                event.preventDefault()
                const formFulled = {}
                const formElements = event.target.querySelectorAll('[data-custom]')
                    formElements.forEach(element =>{
                        if(!element.value.trim()){
                            formFulled[element.dataset.custom] = null;
                        }else{
                            formFulled[element.dataset.custom] = element.value
                        }
                    });
                    backend.addElement(formFulled)
            //    do the check of fromElement if value = null dont send form
            }
        }
    }
    getHtmlElement() {
        return super.getHtmlElement('.formComponent');
    }
}