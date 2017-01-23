
export default class PersonService {
    constructor($http) {
        'ngInject';

        this.$http = $http;
    }

    getPersons() {
        return this.$http({
            method: 'GET',
            url: '/backend/person.json',
        });
    }
}
