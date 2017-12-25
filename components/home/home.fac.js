(function(){

	"use strict";

	angular
	.module("ngHome")
	.factory("homeFactory",function($http){
		function getClassifieds(){
			return $http.get('data/home.json');
		}
		return {
			getClassifieds : getClassifieds
		}
	});
})();