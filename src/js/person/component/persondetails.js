import template from './persondetails.html';

class PersonDetailsComponentController {
    constructor(personService, $stateParams) {
        'ngInject';
        personService.getPerson($stateParams.personId).then((person) => {
            this.person = person;
        });
    }
}

export default class PersonDetailsComponent {
    constructor() {
        this.controller = PersonDetailsComponentController;
        this.restrict = 'E';
        this.template = template;
        this.bindings = {

        };
    }
}
