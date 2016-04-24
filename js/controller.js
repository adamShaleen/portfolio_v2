angular.module("hireMe").controller("controller", function($scope, service) {

$scope.displayBio = service.getBio();

}); // closing controller
