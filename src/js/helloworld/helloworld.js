import angular from 'angular';
import HelloworldComponent from './helloworldcomponent';

export default angular.module('helloworld', [])
    .component('helloworld', new HelloworldComponent());
