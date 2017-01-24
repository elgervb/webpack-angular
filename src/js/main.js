import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Person from './person/person';
import '../scss/main.scss';

angular.module('app', [uiRouter, Person.name])

.config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/person/list');

    $stateProvider
    .state('person', {
        abstract: true,
        url: '/person',
        template:
            `<section ui-view class="d-flex flex-row">

            </section>`
    })
        .state('person.list', {
            url: '/list',
            template:
                `<person-list class="person__list"></person-list>
                <ui-view></ui-view>`

        })
        .state('person.list.details', {
            url: '/{personId}',
            template:
                '<person-details class="person__details"></person-details>'
        });
});

angular.bootstrap(document, ['app']);
