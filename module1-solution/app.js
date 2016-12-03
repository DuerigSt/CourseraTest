(function () {
'use strict';

angular.module('LunchCheckerApp', [])

.controller('LunchCheckerController', function ($scope) {
  $scope.lunchItems = "";
  $scope.countOfLunchItems = 0;
  $scope.stateOfLunchItems  = "Unknown";

  $scope.calculateLunchItems = function () {
    $scope.countOfLunchItems = calculatNumericForString($scope.lunchItems);
    $scope.stateOfLunchItems = calculatState($scope.countOfLunchItems);
  };

  function calculatNumericForString(string) {
    var totalStringValue = 0;

    if (string.length > 0) {
      totalStringValue += 1;
    }

    for (var i = 0; i < string.length; i++) {
      if (string[i] == ',') {
        totalStringValue += 1;
      }
    }

    return totalStringValue;
  }

  function calculatState(count) {
    if (count > 4) {
      return "Too Much";
    }

    return "Acceptable";
  }

});


})();
