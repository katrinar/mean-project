var modules = [
	'HomeModule'
]

var app = angular.module('LandingPage', modules, function($interpolateProvider){
	$interpolateProvider.startSymbol('<%');
	$interpolateProvider.endSymbol('%>');

});