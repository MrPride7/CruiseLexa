class ComponentRegistry {
    registeredComponents = {};

    add(componentClass) {
        this.registeredComponents[componentClass.name] = componentClass;
    }

    get(componentClassName) {
        return this.registeredComponents[componentClassName];
    }
}
