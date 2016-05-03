angular.module("hireMe").controller("controller", function($scope, service) {

$scope.displayBio = service.getBio();

$scope.displaySkillset = service.getSkillset();

$scope.displayProject = service.getProject();

$scope.toggle = false;

$scope.toggleClick = function() {
    $scope.toggle = !$scope.toggle;
};

}); // closing controller
