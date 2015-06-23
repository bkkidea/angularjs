var app = angular.module('app',[]);

app.controller('GreetingController', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';  // sent variable
  $scope.val = "555"; // sent variable
  $scope.func = function(){  // retrun value function
  	return "abc"+"def";
  }
}]);


