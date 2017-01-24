import template from './personlist.html';

class PersonListController {
    constructor(personService) {
        'ngInject';

        personService.getPersons()
        .then((response) => {
            this.persons = response.data;
        });
    }
}

export default class PersonList {
    constructor() {
        'ngInject';

        this.controller = PersonListController;
        this.restrict = 'E';
        this.template = template;
        this.bindings = {
            name: '<'
        };
    }
}
