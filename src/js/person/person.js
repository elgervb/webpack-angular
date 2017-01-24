import angular from 'angular';
import FullnameFilter from './filter/fullnamefilter';
import PersonService from './service/personservice';
import PersonList from './component/personlist';
import PersonDetails from './component/persondetails';

export default angular.module('person', [])
    .component('personList', new PersonList())
    .component('personDetails', new PersonDetails())
    .filter('fullname', FullnameFilter.factory)
    .service('personService', PersonService);
