angular.module('portfolio', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('Home', {
            url: '/',
            templateUrl: 'main.html',
        });

$urlRouterProvider
.otherwise('/');


});  // Closing APP tag
