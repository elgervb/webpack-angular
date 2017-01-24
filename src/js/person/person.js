import angular from 'angular';
import FullnameFilter from './filter/fullnamefilter';
import PersonService from './service/personservice';
import {PersonListComponent} from './component/personlist';
import {PersonDetailsComponent} from './component/persondetails';

export default angular.module('person', [])
    .component('personList', PersonListComponent)
    .component('personDetails', PersonDetailsComponent)
    .filter('fullname', FullnameFilter.factory)
    .service('PersonService', PersonService);
