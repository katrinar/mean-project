var homeCtr = angular.module('HomeModule', []);

homeCtr.controller('HomeController', ['$scope', function($scope){

	$scope.profile = {
		name: 'Rafael Nadal',
		job: 'Tennis Stahh'
	}

	$scope.visitor = {
		name: '',
		email: '',
		phone: ''
	}

	$scope.cities = [
		'san francisco',
		'austin',
		'barcelona',
		'berlin',
		'bogota'
	]

	$scope.init = function(){
		console.log('HomeController: INIT');
	}

	$scope.submit = function(){
		if ($scope.visitor.name.length == 0) {
			alert('Oops, need more info to continue. Please enter your name.');
			return;
		}

		if ($scope.visitor.email.length == 0) {
			alert('Oops, need more info to continue. Please enter your email.');
			return;
		}
		
		if ($scope.visitor.phone.length == 0) {
			alert('Oops, need more info to continue. Please enter your phone number.');
			return;
		}

		console.log('HomeController: SUBMIT' + JSON.stringify($scope.visitor))
	}
}]);