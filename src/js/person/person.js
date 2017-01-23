import angular from 'angular';
import FullnameFilter from './filter/fullnamefilter';
import PersonService from './service/personservice';
import PersonList from './component/personlist';

export default angular.module('person', [])
    .component('personlist', new PersonList())
    .filter('fullname', FullnameFilter.factory)
    .service('personservice', PersonService);
