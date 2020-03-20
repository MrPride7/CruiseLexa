async function getFetchJSON(url) {
    return await fetch(url)
        .then(resp => resp.json());
}
(async function () {
    let data = await getFetchJSON('./fakeData.json');
    localStorage.setItem('cards', JSON.stringify(data));
})();

class Backend{
    constructor() {
        this.state = this.getState();
        this.callbacks = [];

    }
    getState(){
        return JSON.parse(localStorage.getItem('cards'));
    }
    removeElement(item){
        this.state.cards.splice( this.state.cards.findIndex(card => card.id === item.id), 1);
        this.registerOnChange();
    }
    registerOnChange(){

        this.callbacks.forEach(callback => callback(this.state))
    }
    addCallback(callback){

        this.callbacks.push(callback)
    }
    addElement(dataFormCard) {
        const card = {
            "id": generateId(),
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
            ...dataFormCard
        };
        function generateId() {
            const dataNow = new Date()
            return Date.parse(dataNow);
        //    write new function to generate id for card
        }
        this.state.cards.push(card)
        console.log(this.state)
        this.registerOnChange();
    }


}
