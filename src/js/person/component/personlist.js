import template from './personlist.html';

class PersonListController {
    constructor(PersonService) {
        PersonService.getPersons()
        .then((response) => {
            this.persons = response.data;
        });
    }
}

export const PersonListComponent = {
    controller: PersonListController,
    restrict: 'E',
    template,
    bindings: {
        persons: '<'
    }
};
