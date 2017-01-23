import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Person from './person/person';

angular.module('app', [uiRouter, Person.name])

.config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/person');

    $stateProvider
    .state('person', {
        url: '/person',
        template:
            `<helloworld name="'AngularJS'"></helloworld>
            <personlist></personlist>
            <ui-view></ui-view>`,
    });
});

angular.bootstrap(document, ['app']);
