define(['jquery'], function($){


var app = angular.module("app", []);
app.controller("myCtrl", function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});

$('body').animate({'opacity':1},300);

});
