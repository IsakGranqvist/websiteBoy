var app = angular.module('app', []);

app.config(function config($interpolateProvider) {
	$interpolateProvider.startSymbol('!$');
	$interpolateProvider.endSymbol('$!');
});

app.controller('MainCtrl', function() {
	this.name = 'Hello World!';
	//this.data = coolData;
});	

coolData = [];