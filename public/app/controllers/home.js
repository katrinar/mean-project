var homeCtr = angular.module('HomeModule', []);

homeCtr.controller('HomeController', ['$scope', function($scope){

	$scope.init = function(){
		console.log('HomeController: INIT');
	}
}]);