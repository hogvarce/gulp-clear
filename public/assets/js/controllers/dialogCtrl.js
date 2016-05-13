'use strict';

app.controller('dialogCtrl', function ($scope, $mdDialog) {
    $scope.items = [ 1, 2, 3 ];
    $scope.closeDialog = function(){
        $mdDialog.hide();
    };
    $scope.selectItem = function(item){
        $mdDialog.hide();
        console.log(item);
    };
});
