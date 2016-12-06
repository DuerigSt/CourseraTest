(function () {
'use strict';

angular.module('LunchCheckerApp', [])

.controller('LunchCheckerController', function ($scope) {
  $scope.lunchItems = "";
  $scope.lunchState = "---";
  $scope.lunchStateStyle = "";
  $scope.lunchTextBoxStyle = "";

  $scope.calculateLunchItems = function () {
    var countOfLunchItems = calculateNumericForString($scope.lunchItems);
    $scope.lunchState = calculateState(countOfLunchItems);
    $scope.lunchStateStyle = calculateStyle(countOfLunchItems);
    $scope.lunchTextBoxStyle = calculateTextBoxStyle(countOfLunchItems);
  };

  function calculateNumericForString(string) {
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

  function calculateState(count) {
    if (count == 0) {
      return "Please enter data first";
    }

    if (count > 3) {
      return "Too Much!";
    }

    return "Enjoy!";
  }

  function calculateStyle(count) {
    if (count <= 0) {
      return { "color" : "red", "background-color" : "white"};
    }

    return { "color" : "green", "background-color" : "white" };
  }

  function calculateTextBoxStyle(count) {
    if (count <= 0) {
      return { "color" : "black", "background-color" : "white", "border-style" : "solid", "border-color" : "red" };
    }

    return { "color" : "black", "background-color" : "white", "border-style" : "solid", "border-color" : "green" };
  }
});


})();
