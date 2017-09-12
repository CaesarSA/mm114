var mk=angular.module("app",["ngRoute"]);
mk.config(function($routeProvider){
	$routeProvider.when('/a',{
		templateUrl:"a.html",
		controller:"shouye"
	}).when('/b',{
		templateUrl:"b.html",
		controller:"shouye1"
	}).when('/c',{ 
		templateUrl:"c.html",
		controller:"shouye2"
	}).otherwise({
		redirectTo:'shouye'
	}) 
})  
mk.controller("ct1",function  ($scope) {
	
})
mk.controller('shouye',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
	$http.get("a.json").then(function(res){
		$rootScope.bian='shouye';
		$scope.shuju=res.data.info;
		$scope.shuju1=res.data.info1;
		$scope.lb=function(){
			new Swiper(".swiper1",{
				autoplay:1000,
				loop:true,
				pagination:".swiper-pagination"
			})
		}
	})
}])
mk.controller('shouye1',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
	$rootScope.bian='shouye1';
}])
mk.controller('shouye2',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
	$rootScope.bian='shouye2';
}])