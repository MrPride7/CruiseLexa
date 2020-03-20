class CardComponent extends Component{
    constructor(state = {}) {
        super('card');
        this.state = {
            "id": null,
            "sale": null,
            "hit": null,
            "picture": null,
            "image": null,
            "imageAlt": null,
            "title": null,
            "travel": null,
            "time": null,
            "price": null,
            "oldprice": null,
            ...state
        }
        this.handlers = {
            "remove":(event)=>{
                backend.removeElement(this.state)
            },
            "edit":(event)=>{
            },

        }
    }
    static create(...args){
        return new CardComponent(...args)
    }
    getHtmlElement() {
        return super.getHtmlElement('.cardComponent');
    }
    render() {
        return super.render();
    }
}
