  var app = angular
      .module("myApp", [])
      .controller("myController", function($scope, $http) {
          $scope.data = [
              { "ht": "Section1", "pt": "Hello I am first section" },
              { "ht": "Section2", "pt": "Second One " },
              { "ht": "Section3", "pt": "Third One" },
              { "ht": "Section4", "pt": "The Last One" }
          ];

          $scope.accord = {
              value: 'Section1'
          };



      });