import template from './persondetails.html';

class PersonDetailsComponentController {
    constructor(PersonService, $stateParams) {
        'ngInject';
        PersonService.getPerson($stateParams.personId).then((person) => {
            this.person = person;
        });
    }
}

export const PersonDetailsComponent = {
    controller: PersonDetailsComponentController,
    restrict: 'E',
    template,
    bindings: {
        onSave: '&',
        onCancel: '&'
    }
};
