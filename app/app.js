var createRequest = angular.module('createRequest', ['ui.bootstrap','ui.router']);

createRequest.config(function ($stateProvider, $locationProvider, $urlRouterProvider,$urlMatcherFactoryProvider) {
	$urlRouterProvider.otherwise("/identifyCustomer");
	$urlMatcherFactoryProvider.caseInsensitive(true);
	$stateProvider
		.state("identifyCustomer",
			{ 
				url: "/identifyCustomer",
				controller: "identifyCustomerController",
				controllerAs:  "identifyCustomerCtrl",
				templateUrl: "app/views/identifyCustomer.html"
			})
		.state("searchResults",
			{ 
				url: "/searchResults",
				controller: "identifyCustomerController",
				controllerAs:  "identifyCustomerCtrl",
				templateUrl: "app/views/identifyCustomer.html"
			})
		
	// $locationProvider.html5Mode({
	// 	enabled:true;
	// //	requireBase: false
	// });

});