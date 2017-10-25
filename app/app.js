var myNinjaApp = angular.module('MyNinjaApp', []);


myNinjaApp.controller('NinjaController', ['$scope', function($scope){
   // $scope -- scope is the binding piece btwn the view and the controller

   $scope.ninjas = [
     {
       name: 'Ryu',
       belt: 'green',
       rate: 50
     },
     {
       name: 'Ken',
       belt: 'yellow',
       rate: 30
     },
     {
       name: 'Chun-Li',
       belt: 'orange',
       rate: 10
     },
     {
       name: 'Fei Long',
       belt: 'black',
       rate: 1000
     }
   ]

}]);
