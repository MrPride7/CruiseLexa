class DirectiveRegistry {
    registeredDirectives = {};

    add(directiveClass) {
        this.registeredDirectives[directiveClass.name] = directiveClass;
    }

    get(directiveClassName) {
        return this.registeredDirectives[directiveClassName];
    }
}
