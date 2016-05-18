// app.js
var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html'
        })
				
				.state('home.list', {
            url: '/list',
            templateUrl: 'partial-home-list.html',
						controller: function($scope) {
							$scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
						}
        })
				
				.state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
						views:{
							'': {templateUrl: 'partial-about.html'},
							'columnOne@about': {template: 'Look I am a column!'},
							'columnTwo@about': {
								templateUrl: 'table-data.html',
								controller: 'scotchController'
							}
						}						
        });
        
});

routerApp.controller('scotchController', function($scope){
	$scope.message = 'test';
	
	$scope.scotches = [
		{
			name: 'Macallan 12',
			price: 50
		},
		{
			name: 'Macallan 12',
			price: 50
		},
		{
			name: 'Macallan 12',
			price: 50
		}
	];
});