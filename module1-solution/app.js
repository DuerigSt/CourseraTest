(function () {
'use strict';

angular.module('LunchCheckerApp', [])

.controller('LunchCheckerController', function ($scope) {
  $scope.lunchItems = "";
  $scope.stateOfLunchItems  = "Unknown";

  $scope.calculateLunchItems = function () {
    var countOfLunchItems = calculatNumericForString($scope.lunchItems);
    $scope.stateOfLunchItems = calculatState(countOfLunchItems);
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
    if (count == 0) {
        return "Please enter data first";
    }

    if (count > 3) {
      return "Too Much!";
    }



    return "Enjoy!";
  }

});


})();
