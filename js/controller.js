angular.module("hireMe").controller("controller", function($scope, service) {

$scope.displayBio = service.getBio();

$scope.displaySkillset = service.getSkillset();

}); // closing controller
