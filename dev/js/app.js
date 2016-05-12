'use strict';

var app = angular.module('myApp', ['ngMaterial']);

app.controller('mainController', function ($scope) {
  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ];
});

angular.element(document).ready(function() {
  angular.bootstrap(document, ['myApp']);
});
