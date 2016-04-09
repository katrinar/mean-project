var homeCtr = angular.module('HomeModule', []);

homeCtr.controller('HomeController', ['$scope', function($scope){

	$scope.profile = {
		name: '',
		email: '',
		phone: '',
		message: ''
	}


	$scope.people = [
		{name: 'hillary clinton', email: 'new york', phone: 'secretary of state', message: ''},
		{name: 'bernie sanders', email: 'vermont', phone: 'congressman', message: ''},
		{name: 'michael bloomberg', email: 'new york', phone: 'millionaire', message: ''}
	]



	$scope.addProfile = function(){
		console.log('AddProfile: '+JSON.stringify($scope.profile));
		$scope.people.push($scope.profile);
	}

	$scope.init = function(){
		console.log('HomeController: INIT');
	}

	$scope.submit = function(){
		if ($scope.profile.name.length == 0) {
			alert('Oops, need more info to continue. Please enter your name.');
			return;
		}

		if ($scope.profile.email.length == 0) {
			alert('Oops, need more info to continue. Please enter your email.');
			return;
		}
		
		if ($scope.profile.phone.length == 0) {
			alert('Oops, need more info to continue. Please enter your phone number.');
			return;
		}

		console.log('HomeController: SUBMIT' + JSON.stringify($scope.profile))
	}
}]);