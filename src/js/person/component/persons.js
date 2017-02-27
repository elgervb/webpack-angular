import template from './persons.html';

class PersonsComponentController {
    constructor(PersonService) {
        PersonService.getPersons()
        .then((response) => {
            this.persons = response.data;
        });
    }

    select(person) {
        this.selected = person;
    }
}

export const PersonsComponent = {
    controller: PersonsComponentController,
    restrict: 'E',
    template
};
