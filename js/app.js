var app = angular.module('app', ['ngRoute','appControllers']);
 
app.config(['$routeProvider',
  function(route) {
    route.
      when('/about', {
        templateUrl: 'template/about.html',
        controller: 'siteCtrl'
      }).
      when('/skills', {
        templateUrl: 'template/skills.html',
        controller: 'siteCtrl'
      }).
      when('/resume', {
        templateUrl: 'template/resume.html',
        controller: 'siteCtrl'
      }).
      when('/contact', {
        templateUrl: 'template/contact.html',
        controller: 'siteCtrl'
      }).
      otherwise({
        templateUrl: 'template/about.html',
        controller: 'siteCtrl'
      });
}]);

/*
app.init = function(){
	$('.body').css('display','block');
};*/