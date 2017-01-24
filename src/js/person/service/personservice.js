
export default class PersonService {
    constructor($http) {
        'ngInject';

        this.$http = $http;
    }

    getPersons() {
        return this.$http({
            method: 'GET',
            url: '/backend/person.json'
        });
    }

    getPerson(id) {
        const personId = parseInt(id, 10);
        return this.getPersons().then((response) => {
            const arPerson = response.data.filter((person) => {
                return person.id === personId;
            });

            if (arPerson.length === 1) {
                return arPerson[0];
            }

            return null;
        });
    }
}
