


const backend = new Backend();

const appComponent = new AppComponent(backend.state.cards);


const componentRegistry = new ComponentRegistry();
componentRegistry.add(AppComponent);
componentRegistry.add(CardComponent);
componentRegistry.add(FormComponent);
const directiveRegistry = new DirectiveRegistry();
directiveRegistry.add(PutDirective);
directiveRegistry.add(TextDirective);
directiveRegistry.add(ForDirective);

let app = document.getElementById('app');
app.append(appComponent.render());

function update(){
    app.innerHTML = '';
    app.append(appComponent.render());
}

backend.addCallback(update);

