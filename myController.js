var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http){
	$http.get("http://lorem-ipsum.me/api/json").then(function(response){
		$scope.myQuotes = response.data;
		console.log(response.data);
	});
});
