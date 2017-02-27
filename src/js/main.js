import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Person from './person/module';
import '../scss/main.scss';

angular.module('app', [uiRouter, Person.name])

.config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/person');

    $stateProvider
    .state('person', {
        url: '/person',
        template: `
            <persons class="d-flex flex-row">

            </section>
        `
    });
});

angular.bootstrap(document, ['app']);
