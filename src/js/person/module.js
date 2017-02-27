import angular from 'angular';
import FullnameFilter from './filter/fullnamefilter';
import PersonService from './service/personservice';
import {PersonsComponent} from './component/persons';
import {PersonListComponent} from './component/personlist';
import {PersonDetailsComponent} from './component/persondetails';

export default angular.module('person', [])
    .component('persons', PersonsComponent)
    .component('personList', PersonListComponent)
    .component('personDetails', PersonDetailsComponent)
    .filter('fullname', FullnameFilter.factory)
    .service('PersonService', PersonService);
