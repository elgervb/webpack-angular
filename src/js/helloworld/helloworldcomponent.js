
export default class HelloWorldomponent {
    constructor() {
        'ngInject';

        this.controller = () => {};
        this.restrict = 'E';
        this.template = '<h1>Hello {{::$ctrl.name}}</h1>';
        this.bindings = {
            name: '<',
        };
    }
}
