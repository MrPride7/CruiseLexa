

    class AppComponent extends Component{
        constructor(state) {
            super('app-component');
            this.state = state;
        }
        getHtmlElement() {
            return super.getHtmlElement('.appComponent');
        }
        render() {
            return super.render();
        }
    }

