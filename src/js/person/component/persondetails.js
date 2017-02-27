/* global angular */
import template from './persondetails.html';

class PersonDetailsComponentController {
    constructor() {
        'ngInject';

        // copy person
        this.local = angular.copy(this.person);
    }

}

export const PersonDetailsComponent = {
    controller: PersonDetailsComponentController,
    restrict: 'E',
    template,
    bindings: {
        person: '<'
    }
};
