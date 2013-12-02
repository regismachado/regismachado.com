var appControllers = angular.module('appControllers',[]);

appControllers.controller('siteCtrl', ['$scope', '$http', 
	function ($scope, $http) {

	$http.get('data/site.json').success(function(data) {
	    $scope.site = data;
	});

}]);
