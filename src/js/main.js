import angular from 'angular';
import uiRouter from 'angular-ui-router';
import './helloworld/helloworld';

angular.module('app', [uiRouter, 'helloworld'])

.config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/hello');

    $stateProvider
    .state('hello', {
        url: '/hello',
        template: '<helloworld name="\'AngularJS\'"></helloworld><ui-view></ui-view>',
    })
    .state('hello.universe', {
        url: '/universe',
        template: '<helloworld name="\'Universe\'"></helloworld>',
    });
});

angular.bootstrap(document, ['app']);
