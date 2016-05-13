'use strict';

app.controller('mainController', function ($scope, $mdDialog, $mdMedia, $mdSidenav) {
  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ];
  $scope.showMessage = function(message){
      var dialog = $mdDialog.alert({
         title: 'Внимание',
         textContent: message,
         templateUrl: '/element/jade-blocks/dialog.html',
         controller: 'dialogCtrl'
       });
       $mdDialog.show( dialog );
  };
  $scope.toogleSideNav = function(){
     $mdSidenav('left').toggle();
  };
  $scope.menuLink = function(link){
    console.log(link);  
  };
});
