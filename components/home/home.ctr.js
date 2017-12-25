(function(){
	"Use Strict";

	angular
	.module("ngHome")
	.controller("classifiedsCtrl",function($scope, $state, $http, $mdSidenav, $mdToast, $mdDialog){
		showToast('Hello world');
		function showToast(message){
			$mdToast.show(
					$mdToast.simple()
					.content(message)
					.position("top, right")
					.hideDelay(3000)
					);
		}

	});


})();