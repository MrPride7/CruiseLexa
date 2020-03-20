class Directive {
    renderedState = {};
    constructor(element, config, component) {
        this.element = element;
        this.config = config;
        this.componentClass = component;
    }
    checkUpdates(newState) {

    }
    render(newState) {
        if (this.checkUpdates(newState)) {

            this.applyState(newState);
            this.renderedState = newState;
        }
    }
    applyState(newState) {

    }
}


class ForDirective extends  Directive{}
class PutDirective extends Directive{}
class TextDirective extends Directive{

    checkUpdates(newState){
        console.log(backend.state)
        return true;
    }
    applyState(newState) {
        if(this.element.dataset.text[0] === "@"){
           this.element.textContent = this.element.dataset.text.slice(1)
        }else{
            this.element.textContent = newState[this.element.dataset.text]
        }
    }

}